import { toRef } from "vue";
import { createI18n } from 'vue-i18n'
import { useTelegram } from "@/shared/lib/use"
import { languages } from "@/shared/lib/locales";

const { languageTelegram } = useTelegram()
const lang = toRef(languageTelegram)

export const i18n = createI18n({
    legacy: false,
    locale: lang.value || 'en',
    messages: languages
})