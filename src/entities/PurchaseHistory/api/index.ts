import { REQUEST } from '@/shared/api'
import type {OptionItem} from "@/shared/types";

const API_PURCHASE_HISTORY: string = '/api/web-bot/profile/purchase-history'
const API_PURCHASE_HISTORY_DETAILS: string = `${API_PURCHASE_HISTORY}/channel`

const currentYear = new Date().getFullYear()
const getPurchaseHistory = async (type: string, activeSelectedMonth: OptionItem) => {
    try {
        const daysInMonth = new Date(currentYear, activeSelectedMonth.key, 0).getDate();
        const dateStart =  new Date(currentYear, activeSelectedMonth.key - 1, 1, 3).toISOString();
        const dateEnd = new Date(currentYear, activeSelectedMonth.key - 1, daysInMonth, 3).toISOString();

        return await REQUEST('GET', API_PURCHASE_HISTORY, {
                contentType: type,
                dateStart,
                dateEnd
            }
        )
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getPurchaseHistoryDetails = async (channelId: string, ) => {
    try {
        return await REQUEST('GET', `${API_PURCHASE_HISTORY_DETAILS}/${channelId}`)
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getPurchaseHistorySearch = async (searchQuery: string) => {
    try {
        return await REQUEST('GET', API_PURCHASE_HISTORY, {
                contentType: 'ALL',
                search: searchQuery
            }
        )
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getPurchaseHistory,
    getPurchaseHistoryDetails,
    getPurchaseHistorySearch
} as const