
import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {ITags} from './types';
import {MONTHS_LIST_MOCKUPS} from '@/shared/utils';
import type {OptionItem} from '@/shared/types';
import {useI18n} from "vue-i18n";

const namespace = 'purchase-history-expenses'
export const usePurchaseHistoryExpensesStore = defineStore(namespace, () => {
    const { t, locale } = useI18n()

    const selectOptions = ref<OptionItem[]>(MONTHS_LIST_MOCKUPS[locale.value])
    const tags: ITags[] = [
        {
            type: 'SINGLE_POST',
            label: t('common.content'),
            value: 'POST'
        },
        {
            type: 'SUBSCRIPTION',
            label: t('common.closedChannel'),
            value: 'CHANNEL'
        }
    ]
    const activeTag = ref<ITags | null>(null)
    const selectedMonth = ref<OptionItem>(selectOptions.value[new Date().getMonth()])

    const changeActiveTag = (payload: ITags) => {
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
        changeActiveTag
    }
})