/*
 * @Author: daief
 * @LastEditors  : daief
 * @Date: 2019-12-17 17:06:54
 * @LastEditTime : 2020-01-17 14:48:06
 * @Description:
 */
import { IOptions, IToastResult } from './interface';
import {
  guardOptions,
  createToastElAndShow,
  removeEl,
  isBrowser,
  getNoopResult,
} from './helper';
import { MAX_TIMEOUT, CANCELED_MSG } from './constant';
import { queueCtrl } from './Queue';

export default function toast(
  opts: IOptions,
  argTimeout?: number | true,
): IToastResult {
  // SSR safe
  if (!isBrowser()) {
    return getNoopResult();
  }
  const options = guardOptions(opts, argTimeout);
  const { timeout, queue } = options;

  let resolve: any;
  let reject: any;
  let timer: any;
  let promise = new Promise<void>((r1, r2) => {
    resolve = r1;
    reject = r2;
  });

  if (queue) {
    promise.catch(() => {
      // 取消时此处一定被触发，但有两种情况
      //  - 处于队列时就被取消了
      //  - 弹出的过程中被取消
      throw new Error(CANCELED_MSG);
    });
    queueCtrl.push({
      onExcute: () => {
        // 执行到此处逻辑 toast 才会显示
        const elements = createToastElAndShow(options);
        let timer: any;
        if (typeof timeout === 'number' && timeout <= MAX_TIMEOUT) {
          timer = setTimeout(resolve, timeout);
        }

        return promise
          .then(() => {
            removeEl(elements.content, elements.container, options);
          })
          .catch(() => {
            clearTimeout(timer);
            removeEl(elements.content, elements.container, options);
          });
      },
    });
    queueCtrl.execute();
  } else {
    const elements = createToastElAndShow(options);
    if (typeof timeout === 'number' && timeout <= MAX_TIMEOUT) {
      timer = setTimeout(resolve, timeout);
    }
    promise
      .then(() => removeEl(elements.content, elements.container, options))
      .catch(() => {
        removeEl(elements.content, elements.container, options);
        // throw new Error(CANCELED_MSG); // 不用再抛出
      });
  }

  return {
    // 确保后面的链式操作在该 `promise` 之后才执行
    promise: new Promise(_ => _(promise)),
    cancel: () => {
      clearTimeout(timer);
      reject(new Error(CANCELED_MSG));
    },
  };
}

/**
 * default enable `queue` toast
 * @since 1.2.0
 * @param opts
 * @param argTimeout
 */
function queueToast(opts: IOptions, argTimeout?: number | true): IToastResult {
  if (typeof opts === 'string') {
    opts = { text: opts, queue: true };
  } else if (typeof opts === 'boolean') {
    opts = { loading: opts, queue: true };
  } else if (opts && opts.queue !== void 0) {
    opts.queue = true;
  }
  return toast(opts, argTimeout);
}

export { toast, queueToast };
