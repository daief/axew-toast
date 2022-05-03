import { toast } from '../src';

// @ts-ignore
window.toast = toast;

toast.config({ timeout: true });

toast.info('info');
toast.success('success');
toast.error('error');
toast.warning('warning');
toast.info({
  icon: 'https://img.alicdn.com/tfscom/TB1ioTnMVXXXXcXXVXXSutbFXXX.jpg_200x200.jpg',
  text: 'long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text',
});
toast.info({
  asHtml: true,
  text: 'render html <strong style="color: red">xxx</strong>',
});
