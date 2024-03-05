
import {defineStore} from 'pinia';
import {ref} from 'vue';
import {api} from "@/entities/PurchaseHistory/api";
import type {PurchaseHistory} from "@/entities/PurchaseHistory/model/types";

const namespace = 'purchase-history-search'
export const usePurchaseHistorySearchStore = defineStore(namespace, () => {
    const foundPurchaseHistories = ref<PurchaseHistory[]>([])

    const fetchPurchaseHistorySearch = async (searchQuery: string) => {
        try {
            const {response: response} = await api.getPurchaseHistorySearch(searchQuery) as {
                response: PurchaseHistory[]
            }

            foundPurchaseHistories.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }
    return {
        foundPurchaseHistories,
        fetchPurchaseHistorySearch
    }
})