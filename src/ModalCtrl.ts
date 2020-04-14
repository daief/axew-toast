/*
 * @Author: daief
 * @LastEditors: daief
 * @Date: 2019-12-17 16:26:51
 * @LastEditTime: 2019-12-17 18:54:15
 * @Description:
 */
// import { createDiv, isBrowser } from './helper';
// import { MODAL_CLASS_NAME } from './constant';

// export class ModalCtrl {
//   modalDiv!: HTMLDivElement;

//   /**
//    * modal show times
//    */
//   modalCount = 0;

//   constructor() {
//     if (isBrowser()) {
//       this.modalDiv = createDiv(MODAL_CLASS_NAME);
//     }
//   }

//   showModal() {
//     if (this.modalDiv) {
//       this.modalDiv.style.display = 'block';
//       this.modalCount += 1;
//     }
//   }

//   hideModal() {
//     this.modalCount -= 1;
//     if (this.modalDiv && this.modalCount <= 0) {
//       this.modalDiv.style.display = 'none';
//     }
//   }
// }

// export const modalCtrl = new ModalCtrl();
export default {};
