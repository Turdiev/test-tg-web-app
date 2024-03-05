
import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {ITags} from './types';
import {MONTHS_LIST_MOCKUPS} from "@/shared/utils";
import type {OptionItem} from "@/shared/types";

const namespace = 'purchase-history-expenses'
export const usePurchaseHistoryExpensesStore = defineStore(namespace, () => {
    const selectOptions = ref<OptionItem[]>(MONTHS_LIST_MOCKUPS)
    const tags: ITags[] = [
        {
            type: 'SINGLE_POST',
            label: 'Контент',
            value: 'POST'
        },
        {
            type: 'SUBSCRIPTION',
            label: 'Закрытый канал',
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