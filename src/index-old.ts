/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-15 15:45:34
 * @Description:
 */
import { IOptions } from './interface';
import { guardOptions, createDiv } from './helper';
import { ANIMATE_DURATION } from './constant';

const PREFIX = 'axew-toast';
const containerClassName = PREFIX + '-container';
const wrapClassName = PREFIX + '-wrap';
const contentClassName = PREFIX + '-content';
const hideClassName = PREFIX + '-hide';
const textClassName = PREFIX + '-text';
const loadingClassName = PREFIX + '-loading';
const modalClassName = PREFIX + '-modal';
let modalDiv: HTMLElement | null = null;
let modalCount = 0;

/**
 * 监听动画，动画结束时移除元素
 * @param el 动画目标元素
 * @param rootEl 根元素
 */
function removeEl(
  el: HTMLElement,
  rootEl: HTMLElement,
  opts: Exclude<IOptions, boolean | string>,
) {
  let isCalled = false;
  const remove = () => {
    if (isCalled) {
      return;
    }
    isCalled = true;
    document.body.removeChild(rootEl);
    if (opts.isModal) {
      modalCount -= 1;
    }
    if (modalCount <= 0) {
      hideModal();
    }
  };
  el.setAttribute('class', `${contentClassName} ${hideClassName}`);
  el.addEventListener('animationend', remove);
  // force remove
  // 以防 animationend 未触发
  setTimeout(remove, ANIMATE_DURATION);
}

function showModal() {
  if (modalDiv) {
    modalDiv.style.display = 'block';
    modalCount += 1;
  }
}

function hideModal() {
  if (modalDiv) {
    modalDiv.style.display = 'none';
  }
}

/**
 * 调用 toast
 * @param opts
 * @param argTimeout
 */
export default function toast(
  opts: IOptions,
  argTimeout?: number | true,
): {
  promise: Promise<void>;
  cancel: () => void;
} {
  // SSR safe
  if (typeof window === 'undefined') {
    return {
      promise: Promise.resolve(),
      cancel: () => void 0,
    };
  }

  const options = guardOptions(opts, argTimeout);
  const { timeout, text, className, loading, onClick, isModal } = options;

  const container = createDiv(`${containerClassName} ${className}`);
  const content = createDiv(contentClassName);
  const wrap = createDiv(wrapClassName);
  let resolve: any;
  let reject: any;
  let timer: any;

  if (onClick) {
    wrap.addEventListener('click', onClick, onClick.options);
  }

  const promise = new Promise((_r1, _r2) => {
    wrap.innerHTML = loading
      ? `<i class="${loadingClassName}"></i>`
      : `<p class="${textClassName}">${text}</p>`;

    content.appendChild(wrap);
    if (isModal && !modalDiv) {
      modalDiv = modalDiv || createDiv(modalClassName);
      document.body.appendChild(modalDiv);
    }
    if (isModal) {
      showModal();
    }

    container.appendChild(content);
    document.body.appendChild(container);
    resolve = _r1;
    reject = _r2;
    if (typeof timeout === 'number') {
      timer = setTimeout(resolve, timeout);
    }
  })
    .then(() => removeEl(content, container, options))
    .catch(() => {
      removeEl(content, container, options);
      throw new Error(`${PREFIX} - canceled.`);
    });

  return {
    promise,
    cancel: () => {
      clearTimeout(timer);
      reject();
    },
  };
}

export { toast };
