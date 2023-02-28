import { noop } from './constant';
import { IObjectOptions, IOptions } from './interface';

export function handleArgs(argOpts?: IOptions, timeout?: number | true) {
  return {
    timeout,
    ...(typeof argOpts === 'object' ? argOpts : { text: argOpts || '' }),
  } as IObjectOptions;
}

export function guardOptions(
  base: IObjectOptions,
  opts?: IOptions,
  argTimeout?: number | true
): Readonly<Required<IObjectOptions> & { text: string }> {
  if (typeof opts !== 'object') {
    opts = { text: opts || '' };
  }

  const options: Required<IObjectOptions> = {
    text: '' as string,
    asHtml: false,
    className: '',
    isModal: false,
    icon: '',
    iconSpin: false,
    iconSize: 36,
    onClick: noop,
    onClose: noop,
    ...base,
    ...opts,
    timeout: 0,
  };

  let finalTimeout = argTimeout || opts.timeout || 0;

  if (options.icon === 'loading') {
    finalTimeout ||= true;
    options.iconSpin = true;
  } else {
    finalTimeout = finalTimeout || base.timeout || 2500;
  }

  options.timeout = finalTimeout;

  if (typeof options.onClick !== 'function') {
    options.onClick = noop;
  }

  return {
    ...options,
    text: String(options.text || ''),
  };
}

export function cls(
  ...args: Array<Record<string, any> | string | null | boolean | undefined>
) {
  const set = new Set<string>();
  for (let i = args.length - 1; i >= 0; i--) {
    const arg = args[i];
    if (!arg) continue;
    if (typeof arg === 'string') {
      set.add(arg);
    } else if (typeof arg === 'object') {
      Object.keys(arg).forEach(key => {
        arg[key] && set.add(key);
      });
    }
  }
  return Array.from(set).join(' ');
}

export function cssUnit(u: number | string) {
  return (typeof u === 'number' ? `${u}px` : u) || '';
}
