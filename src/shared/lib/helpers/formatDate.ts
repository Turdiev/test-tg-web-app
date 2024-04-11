import {useI18n} from "vue-i18n";

export function formatDateTime(dateTimeString: string): string {
    const { locale } = useI18n()

    const lang = {
        ru: 'ru-RU',
        en: 'en-EN'
    }

    const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }
    const dateTime = new Date(dateTimeString)

    return dateTime.toLocaleDateString(lang[locale.value], options)
}

export function definitionsDate (dateString: string): string {
    const { t } = useI18n()

    const date = new Date(dateString)
    const today = new Date()

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === new Date(today.setDate(today.getDate() - 1)).toDateString();

    if (isToday) return t('common.today');
    if (isYesterday) return t('common.yesterday');

    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);

    return `${day}-${month}-${date.getFullYear()}`;
}