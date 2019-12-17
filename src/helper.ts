/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 16:18:36
 * @LastEditTime: 2019-12-17 16:32:27
 * @Description:
 */
import { IOptions, IObjectOptions } from './interface';

export function guardOptions(
  opts: IOptions,
  argTimeout?: number | true,
): Readonly<IObjectOptions> {
  if (typeof opts === 'string') {
    opts = { text: opts };
  }
  if (typeof opts === 'boolean') {
    opts = { loading: opts };
  }

  const options: IObjectOptions = {
    text: '',
    className: '',
    loading: false,
    isModal: false,
    timeout: argTimeout || 2500,
    ...opts,
  };

  if (typeof options.onClick !== 'function') {
    options.onClick = void 0;
  }

  return Object.freeze(options);
}

export function createDiv(className: string): HTMLDivElement {
  const el = document.createElement('div');
  el.setAttribute('class', className);
  return el;
}
