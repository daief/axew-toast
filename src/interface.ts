/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 16:14:34
 * @LastEditTime: 2019-12-17 20:46:11
 * @Description:
 */
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
   * 是否 loading
   */
  loading?: boolean;
  /**
   * 延迟
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
   * 队列模式
   * @since 1.2.0
   */
  queue?: boolean;
}

export type IOptions = true | string | IObjectOptions;

export interface IToastResult {
  promise: Promise<void>;
  cancel: () => void;
}

export interface IQueueItem {
  onExcute: () => any;
}
