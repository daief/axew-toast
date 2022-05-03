export interface IEventHandler {
  (this: HTMLDivElement, ev: MouseEvent): void;
  options?: boolean | AddEventListenerOptions;
}

export interface IObjectOptions {
  /**
   * 文案
   */
  text?: string;
  /**
   * 使用 html 的方式渲染文本
   */
  asHtml?: boolean;
  /**
   * 定义 icon 类型（或 icon 链接）
   */
  icon?: 'success' | 'error' | 'warning' | 'loading' | string;
  /**
   * @default 36
   */
  iconSize?: number | string;
  /**
   * icon 为 loading 时为 true
   */
  iconSpin?: boolean;
  /**
   * 延迟，true 代表一直存在
   * @default 2500
   */
  timeout?: number | true;
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
  /**
   * 关闭事件
   */
  onClose?: (type: 'auto' | 'cancel') => void;
}

export type IOptions = IObjectOptions | string;

export interface IToastFunction {
  (argOpts: IOptions, timeout?: number): VoidFunction;
}
