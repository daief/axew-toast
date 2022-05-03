import { toast } from '../src';

// @ts-ignore
window.toast = toast;

toast.config({ timeout: true });

toast.show('info');
toast.success('success');
toast.error('error');
toast.warning('warning');
toast.show({
  icon: 'https://img.alicdn.com/tfscom/TB1ioTnMVXXXXcXXVXXSutbFXXX.jpg_200x200.jpg',
  text: 'long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text',
});
toast.show({
  asHtml: true,
  text: `render html <strong style="color: red">xxx</strong>`,
});
