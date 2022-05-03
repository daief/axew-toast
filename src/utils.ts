import { noop } from './constant';
import { IObjectOptions, IOptions } from './interface';

export function handleArgs(argOpts: IOptions, timeout?: number | true) {
  return {
    timeout,
    ...(typeof argOpts === 'string' ? { text: argOpts } : argOpts),
  } as IObjectOptions;
}

export function guardOptions(
  base: IObjectOptions,
  opts: IOptions,
  argTimeout?: number | true
): Readonly<Required<IObjectOptions>> {
  if (typeof opts === 'string') {
    opts = { text: opts };
  }

  const options: Required<IObjectOptions> = {
    text: '',
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
    timeout: opts.timeout || base.timeout || argTimeout || 2500,
  };

  if (options.icon === 'loading') {
    options.iconSpin = true;
  }

  if (typeof options.onClick !== 'function') {
    options.onClick = noop;
  }

  return options;
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
