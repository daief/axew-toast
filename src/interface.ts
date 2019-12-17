/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 16:14:34
 * @LastEditTime: 2019-12-17 18:06:07
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
}

export type IOptions = true | string | IObjectOptions;

export interface IToastResult {
  promise: Promise<void>;
  cancel: () => void;
}

export interface IQueueItem {
  options: Required<IObjectOptions>;
  resolve: any;
  reject: any;
  promise: Promise<void>;
}
