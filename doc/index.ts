import './index.less';
import { toast } from '../src';
import { fromEvent, map, scan } from 'rxjs';

// @ts-ignore
window.toast = toast;

const getEl = (selector: string) => document.querySelector(selector);
const getValue = (selector: string): string =>
  (getEl(selector) as any).value || '';

const fromClick = (selector: string) => fromEvent(getEl(selector)!, 'click');

fromClick('#toast')
  .pipe(
    scan(
      () => ({
        text: getValue('[name=text]'),
        icon: getValue('[name=icon]'),
        timeout: +getValue('[name=timeout]') || 2500,
        isModal: getValue('[name=isModal]:checked') === 'true',
        asHtml: getValue('[name=asHtml]:checked') === 'true',
      }),
      {}
    ),
    map(opts => {
      return toast.show({
        ...opts,
        onClick: () => {
          alert(`Clicked: ${opts.text}`);
        },
      });
    })
  )
  .subscribe(() => {});

fromClick('#closeAll').subscribe(() => {
  toast.destroyAll();
});
