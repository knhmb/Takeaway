import { createI18n } from "vue-i18n";
import en from "./locale/en";

const messages = {
  "en-US": en,
};

const i18n = createI18n({
  locale: "en-US",
  fallbackLocale: "en-US",
  messages,
});

export default i18n;
