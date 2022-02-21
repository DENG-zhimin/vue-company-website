import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

const i18n = createI18n(
  {
    locale: 'en-US',
    messages,
  },
);

/* export const useI18n = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { t, te, tm, rt, d, n, ...globalApi } = i18n.global;
  return {
    t: t.bind(i18n),
    te: te.bind(i18n),
    tm: tm.bind(i18n),
    rt: rt.bind(i18n),
    d: d.bind(i18n),
    n: n.bind(i18n),
    ...globalApi,
  };
}; */

export default boot(({ app }) => {
  // Set i18n instance on app
  // app.use(useI18n);
  app.use(i18n);
});
