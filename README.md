# @axew/toast

`@axew/toast` is a toast component.

- light-weight
- promise
- cancelable
- non-dependence

Demo at <https://daief.tech/axew-toast/>.

## Usage

Install.

```bash
$ yarn add @axew/toast
# or
$ npm i @axew/toast
```

```js
import toast, { createToast } from '@axew/toast';

toast.show('This a message. It will be hidden in 2.5 seconds.');

toast.show('This a message', 3000);

toast.success('This a message', 3000);

// preset a common config
toast.config({ timeout: 3000 });

toast.show('This message will be hidden in 3 seconds.');

// loading style
toast.loading('Loading...');

// or pass a object option
toast.show({
  icon: 'loading',
  className: 'my-custom-class',
  onClick() {
    console.log('clicked');
  },
});

// cancelable
const cancel = toast.show(
  {
    text: 'This a message',
    onClose: why => {
      console.log(why);
    },
  },
  4000
);

setTimeout(() => {
  cancel(); // console.log('cancel');
}, 1000);

// close all toast created by the instance
toast.destroyAll();

// create a new toast instance
const toast2 = createToast();
```

API.

```ts
export declare function createToast(initCfg?: Partial<IObjectOptions>): {
  show: IToastFunction;
  success: IToastFunction;
  error: IToastFunction;
  warning: IToastFunction;
  loading: IToastFunction;
  destroyAll: () => void;
  config: (opts: Partial<IObjectOptions>) => void;
};
export declare const toast: {
  show: IToastFunction;
  success: IToastFunction;
  error: IToastFunction;
  warning: IToastFunction;
  loading: IToastFunction;
  destroyAll: () => void;
  config: (opts: Partial<IObjectOptions>) => void;
};
export default toast;
```

```ts
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
  text?: string;
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
  (argOpts: IOptions, timeout?: number): VoidFunction;
}
```
