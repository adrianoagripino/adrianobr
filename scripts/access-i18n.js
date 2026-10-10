import { messages, resolveLocale } from './i18n.mjs';

const locale = resolveLocale(navigator.languages?.length ? navigator.languages : [navigator.language]);
const copy = messages[locale] || messages.en;
document.documentElement.lang = locale;
document.documentElement.dir = ['ar', 'ur'].includes(locale) ? 'rtl' : 'ltr';
document.title = copy.accessTitle;
document.querySelector('[data-access-title]').textContent = copy.accessTitle;
document.querySelector('[data-access-text]').textContent = copy.accessText;
document.querySelector('[data-access-link]').textContent = copy.accessLink;
