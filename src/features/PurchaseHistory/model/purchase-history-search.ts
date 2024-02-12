import {defineStore} from 'pinia';
import {ref} from "vue";

const namespace = 'purchase-history-search'
export const usePurchaseHistorySearchStore = defineStore(namespace, () => {
    const searchQuery = ref<string>('')


    return {
        searchQuery
    }
})