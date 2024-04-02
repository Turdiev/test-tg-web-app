import { REQUEST } from '@/shared/api'
import type {OptionItem} from '@/shared/types';

const API_PURCHASE_HISTORY: string = '/api/web-bot/profile/purchase-history'
const API_PURCHASE_HISTORY_CHANNEL: string = `${API_PURCHASE_HISTORY}/channel`

const currentYear = new Date().getFullYear()
const getPurchaseHistory = async (type: string, activeSelectedMonth: OptionItem) => {
    try {
        const daysInMonth = new Date(currentYear, activeSelectedMonth.key, 0).getDate();
        const dateStart =  new Date(currentYear, activeSelectedMonth.key - 1, 1, 3).toISOString();
        const dateEnd = new Date(currentYear, activeSelectedMonth.key - 1, daysInMonth, 3).toISOString();

        return await REQUEST({
            method: 'GET',
            url: API_PURCHASE_HISTORY,
            query: {
                contentType: type,
                dateStart,
                dateEnd
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getPurchaseHistoryDetails = async (channelId: string, ) => {
    try {
        return await REQUEST({
            method: 'GET',
            url: `${API_PURCHASE_HISTORY_CHANNEL}/${channelId}`,
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getPurchaseHistoryPaymentLink = async (channelId: string, ) => {
    try {
        return await REQUEST({
            method: 'GET',
            url: `${API_PURCHASE_HISTORY_CHANNEL}/${channelId}/extend-subscription`,
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getPurchaseHistorySearch = async (searchQuery: string) => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_PURCHASE_HISTORY,
            query: {
                contentType: 'ALL',
                search: searchQuery
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getPurchaseHistory,
    getPurchaseHistoryDetails,
    getPurchaseHistorySearch,
    getPurchaseHistoryPaymentLink
} as const