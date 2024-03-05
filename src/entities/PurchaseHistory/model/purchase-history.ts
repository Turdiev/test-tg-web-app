import {computed, ref, watch} from "vue";
import {defineStore, storeToRefs} from 'pinia';
import type {
    PurchaseHistory,
    PurchaseHistoryByDate,
    PurchaseHistoryPrivateChannel
} from '@/entities/PurchaseHistory/model/types';
import type {LocationQueryValue} from 'vue-router';
import {api} from '@/entities/PurchaseHistory/api';
import {useDebounceFn} from "@vueuse/core";
import {useLoadingWrap} from "@/shared/lib/use";
import {usePurchaseHistoryExpensesStore} from "@/entities/PurchaseHistory/model/purchase-history-expenses";

const namespace = 'purchase-history'
export const usePurchaseHistoryStore = defineStore(namespace, () => {
    const contentType: string = ref<string>('ALL')
    const purchaseHistoryData = ref<PurchaseHistory[]>([])
    const currentPurchaseHistoryDetails = ref<PurchaseHistory | PurchaseHistoryPrivateChannel>()
    const totalPurchaseExpenses = ref<number>(0)

    const purchaseHistoryExpensesStore = usePurchaseHistoryExpensesStore()
    const { selectedMonth } = storeToRefs(purchaseHistoryExpensesStore)
    const { isLoading, runWithLoading } = useLoadingWrap()

    const groupPurchaseHistoryByDate = computed(() => {
        let totalAmount = 0

        const groupHistory = purchaseHistoryData.value.reduce((acc: PurchaseHistoryByDate[], curr: PurchaseHistory) => {
            const createdAt: string = parseCreatedAt(curr.createdAt);
            const existingItem: PurchaseHistoryByDate | undefined = acc.find((item: PurchaseHistoryByDate) => item.createdAt === createdAt);

            if (existingItem) {
                existingItem.totalAmount += curr.amount
                existingItem.history.push(curr);
            } else {
                acc.push({
                    date: createdAt,
                    totalAmount: curr.amount,
                    history: [curr]
                });
            }

            if (contentType.value === 'ALL') {
                totalAmount += curr.amount
            }

            return acc;
        }, []);

        if (contentType.value === 'ALL') {
            totalPurchaseExpenses.value = totalAmount
        }

        return groupHistory
    })

    const fetchPurchaseHistory = async () => {
        try {
            const {response: response} = await api.getPurchaseHistory(contentType.value, selectedMonth.value) as {
                response: PurchaseHistory[]
            }

            purchaseHistoryData.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchPurchaseHistoryDebounce = useDebounceFn(fetchPurchaseHistory, 1000)

    watch([contentType, selectedMonth], async () => {
       await runWithLoading(fetchPurchaseHistoryDebounce)
    })

    const fetchPurchaseHistoryChannelDetails = async (channelId: string) => {
        try {
            const {response: response} = await api.getPurchaseHistoryDetails(channelId) as {
                response: PurchaseHistoryPrivateChannel[]
            }

            currentPurchaseHistoryDetails.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const getPurchaseHistoryPostDetails = (postId: string) => {
        currentPurchaseHistoryDetails.value = purchaseHistoryData.value.find(history => history.postId === postId)
    }

    const getDetailedPurchaseHistory = async (isPost: boolean, id: string | null | LocationQueryValue[]) => {
        if (isPost) {
            getPurchaseHistoryPostDetails(id)
        } else {
            await fetchPurchaseHistoryChannelDetails(id)
        }
    }

    const parseCreatedAt = (createdAt: string) => {
        return createdAt.split('T')[0];
    }

    return {
        contentType,
        purchaseHistoryData,
        groupPurchaseHistoryByDate,
        currentPurchaseHistoryDetails,
        totalPurchaseExpenses,
        isLoadingData: isLoading,
        fetchPurchaseHistory,
        getDetailedPurchaseHistory,
        fetchPurchaseHistoryChannelDetails
    }
})