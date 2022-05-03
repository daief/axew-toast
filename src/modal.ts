import { isBrowser, clsModal } from './constant';

let count = 0;

let div: HTMLDivElement;

export function showModal() {
  if (!isBrowser) return;
  if (!div) {
    div = document.createElement('div');
    div.setAttribute('class', clsModal);
    document.body.appendChild(div);
  }

  div.style.display = 'block';
  count++;
}

export function hideModal() {
  count--;
  if (div && count <= 0) {
    div.style.display = 'none';
  }
}
