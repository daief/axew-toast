/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 17:06:54
 * @LastEditTime: 2019-12-17 20:15:54
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
  const { timeout } = options;

  let reject: any;
  let resolve: any;

  const promise = new Promise<void>((r1, _r2) => {
    resolve = r1;
    reject = _r2;
  }).catch(() => {
    // 取消时此处一定被触发，但有两种情况
    //  - 处于队列时就被取消了
    //  - 弹出的过程中被取消
    throw new Error(`${PREFIX} - canceled.`);
  });

  queueCtrl.push({
    options,
    promise,
    onExcute: async () => {
      const elements = createToastElAndShow(options);
      let timer: any;
      if (typeof timeout === 'number' && timeout <= MAX_TIMEOUT) {
        timer = setTimeout(resolve, timeout);
      }

      await promise
        .then(() => {
          removeEl(elements.content, elements.container, options);
        })
        .catch(() => {
          // TODO
          clearTimeout(timer);
          removeEl(elements.content, elements.container, options);
        });

      return {
        ...elements,
        timer,
      };
    },
  });

  queueCtrl.execute();

  return {
    // 确保后面的链式操作在该 `promise` 之后才执行
    promise: new Promise(_ => _(promise)),
    cancel: () => {
      reject();
    },
  };
};

export { toast };
