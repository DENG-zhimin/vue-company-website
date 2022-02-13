/*
 * @Author: Deng Zhimin
 * @Date: 2022-01-12 21:06:26
 * @LastEditTime: 2022-01-12 00:11:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /txcrm/src/boot/msg.js
 */

import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';

interface returnMsg {
  success: boolean;
  message: string;
}

const position = 'top';
const error = (msg: string, html: boolean) =>
  Notify.create({
    message: msg,
    position,
    timeout: 5000,
    html: !!html,
    color: 'negative',
  });
const info = (msg: string, html: boolean) =>
  Notify.create({
    message: msg,
    position,
    html: !!html,
    color: 'positive',
  });
const warn = (msg: string, html: boolean) =>
  Notify.create({
    message: msg,
    position,
    html: !!html,
    color: 'warning',
  });
const retMsg = (r: returnMsg) => {
  if (r.success) {
    info(r.message, true);
  } else {
    error(r.message, true);
  }
};

export default boot(({ app }) => {
  app.config.globalProperties.$error = error;
  app.config.globalProperties.$info = info;
  app.config.globalProperties.$warn = warn;
  app.config.globalProperties.$retMsg = retMsg;
});

export { error, info, warn, retMsg };
