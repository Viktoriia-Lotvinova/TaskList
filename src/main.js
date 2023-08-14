import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.css'
import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'

const messages = Object.assign(languages);

const localStorageLang = localStorage.getItem('lang');

const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || defaultLocale,
    fallbackLocale: 'en',
    messages
});

const app = createApp(App, {
    setup() {
        const { t } = useI18n();
        return { t };
    }
});


app.use(i18n).use(ElementPlus);


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}


app.mount('#app');