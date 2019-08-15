/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-08-15 16:04:14
 * @Description: 用于调试
 */
import toast from '../src';

const LONG_TEXT =
  'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

const { cancel } = toast({
  text: LONG_TEXT,
  timeout: 400000,
  isModal: true,
  onClick: () => {
    console.log('xxx');
  },
});

toast({
  loading: true,
  timeout: 400000,
  isModal: true,
  onClick: () => {
    console.log('xxxxx11');
  },
});

setTimeout(() => {
  // cancel();
}, 1000);

// const m = async () => {
//   for (let index = 0; index < 10; index++) {
//     // eslint-disable-next-line
//     await new Promise(reslove => setTimeout(reslove, 1000));

//     if (index % 2 === 0) {
//       toast(true, 10 * 1000);
//     } else {
//       toast(LONG_TEXT, 10 * 1000);
//     }
//   }
// };

// m();
