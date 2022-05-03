export interface IEventHandler {
  (this: HTMLDivElement, ev: MouseEvent): void;
  options?: boolean | AddEventListenerOptions;
}

export interface IObjectOptions {
  /**
   * toast message
   *
   * 文案
   */
  text?: string | number;
  /**
   * render text as html string
   *
   * 使用 html 的方式渲染文本
   *
   * @default false
   */
  asHtml?: boolean;
  /**
   * the icon type or custom icon img url
   *
   * 定义 icon 类型（或 icon 链接）
   */
  icon?: 'success' | 'error' | 'warning' | 'loading' | string;
  /**
   * @default 36
   */
  iconSize?: number | string;
  /**
   * icon spin
   *
   * icon 为 loading 时为 true
   */
  iconSpin?: boolean;
  /**
   * toast display time. always display when true
   *
   * 延迟，true 代表一直存在
   *
   * @default 2500
   */
  timeout?: number | true;
  /**
   * show modal div
   *
   * 是否模态
   */
  isModal?: boolean;
  /**
   * css class
   *
   * 样式名
   */
  className?: string;
  /**
   * click hadnler
   *
   * 点击事件
   */
  onClick?: IEventHandler;
  /**
   * toast close event
   *
   * 关闭事件
   */
  onClose?: (why: 'auto' | 'cancel') => void;
}

export type IOptions = IObjectOptions | string;

export interface IToastFunction {
  (argOpts?: IOptions, timeout?: number): VoidFunction;
}
