/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 17:06:54
 * @LastEditTime: 2019-12-17 17:21:17
 * @Description:
 */
import { IOptions, IToastResult } from './interface';
import { guardOptions, createToastEl, removeEl, isBrowser } from './helper';
import { MAX_TIMEOUT, PREFIX } from './constant';

export default function toast(
  opts: IOptions,
  argTimeout?: number | true,
): IToastResult {
  // SSR safe
  if (!isBrowser()) {
    return {
      promise: Promise.resolve(),
      cancel: () => void 0,
    };
  }
  const options = guardOptions(opts, argTimeout);
  const { timeout } = options;

  let reject: any;
  let timer: any;

  const elements = createToastEl(options);
  const promise = new Promise<void>((resolve, _r2) => {
    reject = _r2;
    if (typeof timeout === 'number' && timeout <= MAX_TIMEOUT) {
      timer = setTimeout(resolve, timeout);
    }
  })
    .then(() => removeEl(elements.content, elements.container, options))
    .catch(() => {
      removeEl(elements.content, elements.container, options);
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
