
import {defineStore} from 'pinia';
import {markRaw, ref} from 'vue';
import type {ITags} from './types';

const namespace = 'purchase-history-expenses'
export const usePurchaseHistoryStore = defineStore(namespace, () => {
    const selectedMonth: string = ref('февраль')
    const selectOptions: string[] = [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ]
    const tags: ITags[] = [
        {
            type: 'default',
            label: 'Контент',
            value: 'content'
        },
        {
            type: 'default',
            label: 'Закрытый канал',
            value: 'close-channel'
        }
    ]
    const activeTag = ref<ITags | null>(null)

    const handleTag = (payload: ITags) => {
        if (!activeTag.value) {
            activeTag.value = payload
        } else {
            activeTag.value = payload.value === activeTag.value.value ? null : payload
        }
    }


    return {
        selectedMonth,
        selectOptions,
        activeTag,
        tags,
        handleTag
    }
})