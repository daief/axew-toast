# @axew/toast

`@axew/toast` is a html toast component.

Demo as <https://daief.tech/axew-toast/>.

## Usage

Install.

```bash
$ yarn add @axew/toast
# or
$ npm i @axew/toast
```

```js
import toast from '@axew/toast';

toast('This a message');

toast('This a message', 3000);

// loading style
toast(true, 3000);

// loading style, always display
toast(true, true);

// or pass a options
toast({
  loading: true,
  className: 'className',
  onClick() {
    console.log('clicked');
  },
});

// Promise
toast('This a message', 3000).promise.then(() => {
  console.log('Now is end.');
});

// cancelable
const { cancel, promise } = toast('This a message', 4000);
promise.catch(() => {
  console.log('Catched when toast is canceled.');
});
setTimeout(() => {
  cancel();
}, 1000);
```

API.

```ts
function toast(
  opts: IOptions,
  argTimeout?: number | true,
): {
  promise: Promise<void>;
  cancel: () => void;
};
```

```ts
type IOptions =
  /**
   * loading style
   */
  | true
  /**
   * toast message
   */
  | string
  /**
   * object options
   */
  | {
      /**
       * message
       */
      text?: string;
      /**
       * is loading
       */
      loading?: boolean;
      /**
       * when `true`, toast will not disappear
       * @default 2500
       */
      timeout?: number | true;
      /**
       * is a modal toast
       */
      isModal?: boolean;
      /**
       * class name
       */
      className?: string;
      /**
       * click event handler
       */
      onClick?: IEventHandler;
    };
/**
 * click handler schema
 */
interface IEventHandler {
  (this: HTMLDivElement, ev: MouseEvent): void;
  options?: boolean | AddEventListenerOptions;
}
```
