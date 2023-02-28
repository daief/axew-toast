import {
  ANIMATE_DURATION,
  clsContent,
  clsHide,
  icons,
  isBrowser,
  noop,
  clsText,
  clsContainer,
  clsSpin,
  clsIcon,
} from './constant';
import { IObjectOptions, IToastFunction } from './interface';
import { cls, cssUnit, guardOptions, handleArgs } from './utils';
import './style';
import { hideModal, showModal } from './modal';
import { insertToastEl, removeToastEl } from './container';

function createDiv(className: string): HTMLDivElement {
  const el = document.createElement('div');
  el.setAttribute('class', className);
  return el;
}

/**
 * 监听动画，动画结束时移除元素
 * @param el 动画目标元素
 * @param containerEl 根元素
 * @param onRemoved
 */
function removeEl(
  el: HTMLElement,
  containerEl: HTMLElement,
  onRemoved?: VoidFunction
) {
  let isCalled = false;
  const remove = () => {
    if (isCalled) {
      return;
    }
    isCalled = true;
    removeToastEl(containerEl);
    onRemoved?.();
  };
  el.classList.add(clsHide);
  el.addEventListener('animationend', remove);
  // force remove
  // 以防 animationend 未触发
  setTimeout(remove, ANIMATE_DURATION);
}

function createToastElAndShow(options: ReturnType<typeof guardOptions>) {
  const { text, className, onClick, icon, iconSpin, iconSize, asHtml } =
    options;
  const container = createDiv(cls(clsContainer, className));
  const content = createDiv(clsContent);

  if (onClick !== noop) {
    content.addEventListener('click', onClick, onClick.options);
  }

  let contentHtmlStr = '';

  const iconSrc = icons[icon] || icon;
  if (iconSrc) {
    contentHtmlStr += `<i class="${cls(clsIcon, {
      [clsSpin]: iconSpin,
    })}" style="background-image:url(${iconSrc});width:${cssUnit(
      iconSize
    )};height:${cssUnit(iconSize)}"></i>`;
  }

  if (text) {
    const textContent = asHtml
      ? text
      : ((content.textContent = text), content.innerHTML);
    contentHtmlStr += `<div class="${clsText}">${textContent}</div>`;
  }

  content.innerHTML = contentHtmlStr;

  if (contentHtmlStr) {
    container.appendChild(content);
  }

  return {
    container,
    content,
  };
}

export function createToast(initCfg?: Partial<IObjectOptions>) {
  let uns = new Set<VoidFunction>();
  let cacheCfg: Partial<IObjectOptions> = { ...initCfg };

  const show: IToastFunction = (argOpts, timeout): VoidFunction => {
    if (!isBrowser) {
      return noop;
    }

    const options = guardOptions(cacheCfg, argOpts, timeout);

    const elements = createToastElAndShow(options);
    insertToastEl(elements.container);
    if (options.isModal) showModal();

    const cancel = (type: 'auto' | 'cancel') => {
      removeEl(elements.content, elements.container, () => {
        hideModal();
        options.onClose(type);
      });
    };

    const un = () => {
      cancel('cancel');
      uns.delete(un);
    };

    uns.add(un);

    if (options.timeout && typeof options.timeout === 'number') {
      setTimeout(() => {
        cancel('auto');
      }, options.timeout);
    }

    return () => cancel('cancel');
  };

  const success: IToastFunction = (arg1, arg2) => {
    return show({ icon: 'success', ...handleArgs(arg1, arg2) });
  };

  const error: IToastFunction = (arg1, arg2) => {
    return show({ icon: 'error', ...handleArgs(arg1, arg2) });
  };

  const warning: IToastFunction = (arg1, arg2) => {
    return show({ icon: 'warning', ...handleArgs(arg1, arg2) });
  };

  const loading: IToastFunction = (arg1, arg2) => {
    const finalArg = handleArgs(arg1, arg2);
    return show({
      icon: 'loading',
      ...finalArg,
      timeout: finalArg.timeout ?? true,
    });
  };

  return {
    show,
    success,
    error,
    warning,
    loading,
    destroyAll: () => {
      uns.forEach(un => {
        un();
      });
      uns = new Set();
    },
    config: (opts: Partial<IObjectOptions>) => {
      cacheCfg = opts;
    },
  };
}

export const toast = createToast();

/**
 * same as `toast.show`
 * @deprecated use `toast.show`
 */
const defaultExportFunction = (...args: Parameters<IToastFunction>) => {
  return toast.show(...args);
};

export default Object.assign(defaultExportFunction, toast);

export * from './interface';
