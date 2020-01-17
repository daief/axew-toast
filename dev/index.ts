/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-15 16:04:14
 * @Description: 用于调试
 */
import toast from '../src';
import '../src/style';

// @ts-ignore
window.axewToast = toast;

const select = (_: string) => document.querySelector(_) as any;

const $toast: HTMLButtonElement = select('#toast');
const $cancel: HTMLButtonElement = select('#cancel');
let queue: any[] = [];

const getRadioValue = (name: string) => {
  const value = select(`input[name=${name}]:checked`).value;
  return value === 'true';
};

const getInputValue = (name: string) => {
  return (select(`input[name=${name}]`) || select(`textarea[name=${name}]`))
    .value;
};

$toast.addEventListener('click', () => {
  const text = getInputValue('text');
  const loading = getRadioValue('loading');
  let timeout = getInputValue('timeout');
  timeout = timeout === 'true' ? true : +timeout || 0;
  const isModal = getRadioValue('isModal');
  const isQueue = getRadioValue('queue');
  const className = getInputValue('className');
  const onClick = getInputValue('onClick');

  const { cancel, promise } = toast({
    text,
    loading,
    timeout,
    isModal,
    className,
    queue: isQueue,
    onClick: () => {
      try {
        eval(onClick);
      } catch (_) {
        console.warn('Click event handler has some error', _);
      }
    },
  });
  promise.then(() => {
    const i = queue.findIndex(_ => cancel);
    if (i > -1) {
      queue[i] = null;
      queue = queue.filter(_ => !!_);
    }
  });
  queue.push(cancel);
});

$cancel.addEventListener('click', () => {
  const first = queue.shift();
  if (first) {
    first();
  }
});
