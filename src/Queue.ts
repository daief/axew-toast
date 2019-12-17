/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 17:29:27
 * @LastEditTime: 2019-12-17 20:16:28
 * @Description:
 */
import { IQueueItem } from './interface';

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
      const { onExcute } = item;
      await onExcute();
    }
    this.lock = false;
  }
}

export const queueCtrl = new Queue();
