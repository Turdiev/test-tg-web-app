import {REQUEST} from '@/shared/api'

const API_PURCHASE_CONTENT_BOT: string = '/api/web-bot/subscriber/purchases/bot'
const API_PURCHASE_CONTENT_BOT_COUNT: string = '/api/web-bot/subscriber/purchases/bot/count'
const API_PURCHASE_CONTENT_CHANNEL: string = '/api/web-bot/subscriber/purchases/channel'

const getPurchaseContentBot = async () => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_PURCHASE_CONTENT_BOT
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getPurchaseContentBotById = async (id: string) => {
    try {
        return await REQUEST({
            method: 'GET',
            url: `${API_PURCHASE_CONTENT_BOT}/${id}`
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getPurchaseContentBotCount = async () => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_PURCHASE_CONTENT_BOT_COUNT
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getPurchaseContentChannel = async () => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_PURCHASE_CONTENT_CHANNEL
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getSearchPurchaseContent = async (searchQuery: string, contentType: string) => {
    try {
        const apiSearchContent = contentType === 'content' ? API_PURCHASE_CONTENT_BOT : API_PURCHASE_CONTENT_CHANNEL

        return await REQUEST({
            method: 'GET',
            url: apiSearchContent
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getPurchaseContentBot,
    getPurchaseContentBotById,
    getPurchaseContentBotCount,
    getPurchaseContentChannel,
    getSearchPurchaseContent
} as const