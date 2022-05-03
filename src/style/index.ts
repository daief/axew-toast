import { isBrowser } from '../constant';
// @ts-ignore
import css from './index.less?inline';

if (isBrowser) {
  const s = document.createElement('style');
  s.innerHTML = css;
  document.head.insertAdjacentElement('afterbegin', s);
}
