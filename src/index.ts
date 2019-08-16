/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-15 15:45:34
 * @Description:
 */
import './style';

const ANIMATE_DURATION = 500;
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

export interface IEventHandler {
  (this: HTMLDivElement, ev: MouseEvent): void;
  options?: boolean | AddEventListenerOptions;
}

export type IOptions =
  | true
  | string
  | {
      /**
       * 文案
       */
      text?: string;
      /**
       * 是否 loading
       */
      loading?: boolean;
      /**
       * 延迟
       * @default 2500
       */
      timeout?: number;
      /**
       * 是否模态
       */
      isModal?: boolean;
      /**
       * 样式名
       */
      className?: string;
      /**
       * 点击事件
       */
      onClick?: IEventHandler;
    };

function createDiv(className: string): HTMLDivElement {
  const el = document.createElement('div');
  el.setAttribute('class', className);
  return el;
}

/**
 * 监听动画，动画结束时移除元素
 * @param el 动画目标元素
 * @param rootEl 根元素
 */
function removeEl(el: HTMLElement, rootEl: HTMLElement) {
  const remove = () => {
    document.body.removeChild(rootEl);
    modalCount -= 1;
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
  argTimeout?: number,
): {
  promise: Promise<void>;
  cancel: () => void;
} {
  if (typeof window === 'undefined') {
    return {
      promise: Promise.resolve(),
      cancel: () => void 0,
    };
  }
  if (typeof opts === 'string') {
    opts = {
      text: opts,
    };
  }

  if (typeof opts === 'boolean') {
    opts = {
      loading: opts,
    };
  }

  const {
    timeout,
    text = '',
    className = '',
    loading = false,
    onClick,
    isModal = false,
  } = {
    timeout: argTimeout || 2500,
    ...opts,
  };

  const container = createDiv(`${containerClassName} ${className}`);
  const content = createDiv(contentClassName);
  const wrap = createDiv(wrapClassName);

  if (typeof onClick === 'function') {
    wrap.addEventListener('click', onClick, onClick.options);
  }

  let resolve: any;
  let reject: any;
  let timer: any;

  const promise = new Promise((_r1, _r2) => {
    wrap.innerHTML = loading
      ? `
      <i class="${loadingClassName}"></i>
    `
      : `
      <p class="${textClassName}">${text}</p>
    `;

    content.appendChild(wrap);

    if (isModal) {
      modalDiv = modalDiv || createDiv(modalClassName);
      document.body.appendChild(modalDiv);
      showModal();
    }

    container.appendChild(content);
    document.body.appendChild(container);
    resolve = _r1;
    reject = _r2;
    timer = setTimeout(resolve, timeout);
  })
    .then(() => removeEl(content, container))
    .catch(() => {
      removeEl(content, container);
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
