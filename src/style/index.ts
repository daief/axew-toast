// @ts-ignore
import css from './index.less?inline';
import { isBrowser } from '../helper';

if (isBrowser) {
  const s = document.createElement('style');
  s.innerHTML = css;
  document.head.insertAdjacentElement('afterbegin', s);
}
