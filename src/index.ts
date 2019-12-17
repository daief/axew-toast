/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 17:06:54
 * @LastEditTime: 2019-12-17 18:41:44
 * @Description:
 */
import { IOptions, IToastResult } from './interface';
import {
  guardOptions,
  createToastElAndShow,
  removeEl,
  isBrowser,
} from './helper';
import { MAX_TIMEOUT, PREFIX } from './constant';
import { queueCtrl } from './Queue';

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

  const elements = createToastElAndShow(options);
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

toast.queue = function(
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
  let reject: any;
  let resolve: any;
  const promise = new Promise<void>((r1, _r2) => {
    resolve = r1;
    reject = _r2;
  }).catch(() => {
    throw new Error(`${PREFIX} - canceled.`);
  });
  queueCtrl.push({
    options,
    reject,
    resolve,
    promise,
  });
  queueCtrl.execute();

  return {
    promise,
    cancel: () => {
      reject();
    },
  };
};

export { toast };
