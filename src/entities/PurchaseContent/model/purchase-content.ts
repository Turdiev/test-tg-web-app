

import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {
    IPurchaseContentBot,
    IPurchaseContentBotById,
    IPurchaseContentChannel
} from "@/entities/PurchaseContent/model/types";
import {api} from "@/entities/PurchaseContent/api";
import type {RouteParamValue} from "vue-router";

const namespace = 'purchase-content'
export const usePurchaseContentStore = defineStore(namespace, () => {
    const purchaseContentData = ref<IPurchaseContentBot[] | IPurchaseContentChannel[]>([])
    const foundPurchaseContents = ref<IPurchaseContentBot[] | IPurchaseContentChannel[]>([])
    const purchasingBotContent = ref<IPurchaseContentBotById>()
    const totalPurchaseContents = ref<number>(0)
    const isShowSearchBar = ref(false)
    const purchaseContentTabs = ref([
        {
            name: 'Контент',
            value: 'content'
        },
        {
            name: 'Закрытые каналы',
            value: 'channel'
        }
    ])
    const activeTab = ref({
        name: 'Контент',
        value: 'content'
    })

    const fetchPurchaseContentsBot = async (): Promise<void> => {
        try {
            const {response: response} = await api.getPurchaseContentBot() as {
                response: {
                    results: IPurchaseContentBot[]
                }
            }

            purchaseContentData.value = response.results
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchPurchaseContentsBotById = async (botId: string | RouteParamValue[]): Promise<void> => {
        try {
            const {response: response} = await api.getPurchaseContentBotById(botId) as {
                response: {
                    results: IPurchaseContentBotById[]
                }
            }

            purchasingBotContent.value = response.results
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchPurchaseContentsCount = async (): Promise<void> => {
        try {
            const {response: response} = await api.getPurchaseContentBotCount() as {
                response : number
            }

            totalPurchaseContents.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchPurchaseContentsChannel = async (): Promise<void> => {
        try {
            const {response: response} = await api.getPurchaseContentChannel() as {
                response: IPurchaseContentChannel[]
            }

            purchaseContentData.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchSearchPurchaseContents = async (searchQuery: string): Promise<void> => {
        try {
            const {response: response} = await api.getSearchPurchaseContent(searchQuery, activeTab.value.value) as {
                response: {
                    results: IPurchaseContentBot[] | IPurchaseContentChannel[]
                }
            }

            foundPurchaseContents.value = activeTab.value.value === 'content' ? response.results : response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    return {
        purchaseContentData,
        foundPurchaseContents,
        totalPurchaseContents,
        purchasingBotContent,
        isShowSearchBar,
        purchaseContentTabs,
        activeTab,
        fetchPurchaseContentsBot,
        fetchPurchaseContentsBotById,
        fetchPurchaseContentsCount,
        fetchPurchaseContentsChannel,
        fetchSearchPurchaseContents
    }
})