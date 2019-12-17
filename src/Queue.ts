/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 17:29:27
 * @LastEditTime: 2019-12-17 18:41:01
 * @Description:
 */
import { IQueueItem } from './interface';
import { createToastElAndShow, removeEl } from './helper';
import { MAX_TIMEOUT } from './constant';

export class Queue {
  private queue: IQueueItem[] = [];
  private lock = false;

  push(item: IQueueItem) {
    this.queue.push(item);
  }

  front(): IQueueItem | void {
    return this.queue.shift();
  }

  async execute() {
    if (this.lock) {
      return;
    }

    this.lock = true;
    let item: IQueueItem | void;
    while ((item = this.front())) {
      const { options, resolve, promise } = item;
      const { timeout } = options;
      const elements = createToastElAndShow(options);

      let timer: any;
      Promise.resolve().then(() => {
        if (typeof timeout === 'number' && timeout <= MAX_TIMEOUT) {
          timer = setTimeout(resolve, timeout);
        }
      });

      await promise
        .then(() => removeEl(elements.content, elements.container, options))
        .catch(() => {
          // canceled
          clearTimeout(timer);
          removeEl(elements.content, elements.container, options);
        });
    }
    this.lock = false;
  }
}

export const queueCtrl = new Queue();
