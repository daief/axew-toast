/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 16:18:36
 * @LastEditTime: 2019-12-18 09:35:14
 * @Description:
 */
import { IOptions, IObjectOptions } from './interface';
import {
  CONTAINER_CLASS_NAME,
  CONTENT_CLASS_NAME,
  WRAP_CLASS_NAME,
  LOADING_CLASS_NAME,
  TEXT_CLASS_NAME,
  HIDE_CLASS_NAME,
  ANIMATE_DURATION,
} from './constant';
import { modalCtrl } from './ModalCtrl';

export function noop() {}

export function isBrowser() {
  return typeof window !== 'undefined';
}

export function guardOptions(
  opts: IOptions,
  argTimeout?: number | true,
): Readonly<Required<IObjectOptions>> {
  if (typeof opts === 'string') {
    opts = { text: opts };
  }
  if (typeof opts === 'boolean') {
    opts = { loading: opts };
  }

  const options: Required<IObjectOptions> = {
    text: '',
    className: '',
    loading: false,
    isModal: false,
    timeout: argTimeout || 2500,
    onClick: noop,
    queue: false,
    ...opts,
  };

  if (typeof options.onClick !== 'function') {
    options.onClick = noop;
  }

  return Object.freeze(options);
}

export function createDiv(className: string): HTMLDivElement {
  const el = document.createElement('div');
  el.setAttribute('class', className);
  return el;
}

export function cls(...arr: string[]) {
  return arr.filter(_ => !!_).join(' ');
}

export function createToastElAndShow(options: Required<IObjectOptions>) {
  const { text, className, loading, onClick, isModal } = options;
  const container = createDiv(cls(CONTAINER_CLASS_NAME, className));
  const content = createDiv(CONTENT_CLASS_NAME);
  const wrap = createDiv(WRAP_CLASS_NAME);

  if (onClick !== noop) {
    wrap.addEventListener('click', onClick, onClick.options);
  }

  wrap.innerHTML = loading
    ? `<i class="${LOADING_CLASS_NAME}"></i>`
    : `<p class="${TEXT_CLASS_NAME}">${text}</p>`;

  content.appendChild(wrap);
  container.appendChild(content);

  if (isModal) {
    document.body.appendChild(modalCtrl.modalDiv);
    modalCtrl.showModal();
  }
  document.body.appendChild(container);

  return {
    container,
    content,
    wrap,
  };
}

/**
 * 监听动画，动画结束时移除元素
 * @param el 动画目标元素
 * @param rootEl 根元素
 */
export function removeEl(
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
      modalCtrl.hideModal();
    }
  };
  el.setAttribute('class', cls(CONTENT_CLASS_NAME, HIDE_CLASS_NAME));
  el.addEventListener('animationend', remove);
  // force remove
  // 以防 animationend 未触发
  setTimeout(remove, ANIMATE_DURATION);
}

export const getNoopResult = () => ({
  promise: Promise.resolve(),
  cancel: () => void 0,
});
