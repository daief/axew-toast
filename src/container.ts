import { clsRoot } from './constant';

let div: HTMLDivElement;

export function insertToastEl(el: HTMLElement) {
  if (!div) {
    div = document.createElement('div');
    div.setAttribute('class', clsRoot);
    document.body.appendChild(div);
  }

  div.appendChild(el);
}

export function removeToastEl(el: HTMLElement) {
  try {
    div && div.removeChild(el);
  } catch (error) {}
}
