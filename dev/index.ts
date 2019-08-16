/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-15 16:04:14
 * @Description: 用于调试
 */
import toast from '../src';

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
  const timeout = +getInputValue('timeout') || 0;
  const isModal = getRadioValue('isModal');
  const className = getInputValue('className');
  const onClick = getInputValue('onClick');

  const { cancel, promise } = toast({
    text,
    loading,
    timeout,
    isModal,
    className,
    onClick: () => {
      try {
        eval(onClick);
      } catch (_) {
        //
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
