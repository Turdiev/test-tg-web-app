import type {OptionItem} from '@/shared/types';

const MONTHS_LIST_MOCKUPS_RU: OptionItem[] = [
    { label: 'Январь', key: 1 },
    { label: 'Февраль', key: 2 },
    { label: 'Март', key: 3 },
    { label: 'Апрель', key: 4 },
    { label: 'Май', key: 5 },
    { label: 'Июнь', key: 6 },
    { label: 'Июль', key: 7 },
    { label: 'Август', key: 8 },
    { label: 'Сентябрь', key: 9 },
    { label: 'Октябрь', key: 10 },
    { label: 'Ноябрь', key: 11 },
    { label: 'Декабрь', key: 12 }
]

const MONTHS_LIST_MOCKUPS_EN: OptionItem[] = [
    { label: 'January', key: 1 },
    { label: 'February', key: 2 },
    { label: 'March', key: 3 },
    { label: 'April', key: 4 },
    { label: 'May', key: 5 },
    { label: 'June', key: 6 },
    { label: 'July', key: 7 },
    { label: 'August', key: 8 },
    { label: 'September', key: 9 },
    { label: 'October', key: 10 },
    { label: 'November', key: 11 },
    { label: 'December', key: 12 }
]

export const MONTHS_LIST_MOCKUPS = {
    en: MONTHS_LIST_MOCKUPS_EN,
    ru: MONTHS_LIST_MOCKUPS_RU
}