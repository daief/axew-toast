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
import './style';

export default function toast(
  opts: IOptions,
  argTimeout?: number | true
): IToastResult {
  // SSR safe
  if (!isBrowser) {
    return getNoopResult();
  }
  const options = guardOptions(opts, argTimeout);
  const { timeout, queue } = options;

  let resolve: any;
  let reject: any;
  let timer: any;
  let elements: ReturnType<typeof createToastElAndShow>;
  let promise = new Promise<void>((r1, r2) => {
    resolve = r1;
    reject = r2;
  });

  if (queue) {
    let queueResolve: any;
    let queueReject: any;
    const queuePromise = new Promise((r1, r2) => {
      queueResolve = r1;
      queueReject = r2;
    })
      .then(() => {
        // 队列内 promsie 结束后，改变最外层 promise 状态
        if (elements) {
          removeEl(elements.content, elements.container, options);
        }
        resolve();
      })
      .catch(() => {
        // 被取消
        clearTimeout(timer);
        if (elements) {
          removeEl(elements.content, elements.container, options);
        }
      });

    const queueItem = {
      onExcute: () => {
        // 执行到此处逻辑 toast 才会显示
        elements = createToastElAndShow(options);
        if (typeof timeout === 'number' && timeout <= MAX_TIMEOUT) {
          timer = setTimeout(queueResolve, timeout); // toast 执行结束
        }
        return queuePromise;
      },
    };

    // 先存入队列
    queueCtrl.push(queueItem);
    queueCtrl.execute();

    // 外部人为调用了 cancel
    promise = promise.catch(error => {
      // 但有两种情况
      //  - 处于队列时就被取消了
      //  - 弹出的过程中被取消

      // 还在队列中，则提前移除
      queueCtrl.remove(queueItem);

      // 弹出过程中无需特殊处理
      // ---

      queueReject();

      throw error;
    });
  } else {
    elements = createToastElAndShow(options);
    if (typeof timeout === 'number' && timeout <= MAX_TIMEOUT) {
      timer = setTimeout(resolve, timeout);
    }
    promise = promise
      .then(() => removeEl(elements.content, elements.container, options))
      .catch(error => {
        removeEl(elements.content, elements.container, options);
        throw error;
      });
  }

  return {
    promise,
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
