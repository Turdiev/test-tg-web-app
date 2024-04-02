import { REQUEST } from '@/shared/api'

const API_CATALOG: string = '/api/web-bot/catalog'
const API_CATALOG_CHANNEL: string = `${API_CATALOG}/channels`
const API_CATALOG_CATEGORIES: string = `${API_CATALOG}/categories-list`
const API_CATALOG_CHANNEL_CATEGORY: string = `${API_CATALOG}/channels/category`

const getCatalogChannel = async () => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_CATALOG_CHANNEL
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getCatalogCategories = async () => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_CATALOG_CATEGORIES
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getCatalogChannelByCategoryId = async (categoryId: string) => {
    try {
        return await REQUEST({
            method: 'GET',
            url: `${API_CATALOG_CHANNEL_CATEGORY}/${categoryId}`
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getSearchCatalogChannel = async (searchQuery: string) => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_CATALOG_CHANNEL,
            query: {
                search: searchQuery
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getCatalogChannel,
    getCatalogCategories,
    getCatalogChannelByCategoryId,
    getSearchCatalogChannel
} as const