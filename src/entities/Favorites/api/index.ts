import {REQUEST} from '@/shared/api'

const API_FAVORITES: string = '/api/web-bot/subscriber/favorites/bot'
const API_ADD_FAVORITES: string = '/api/web-bot/subscriber/bot'

const getFavoritesChannel = async () => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_FAVORITES
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const changeFavoritesChannel = async (botId: string): Promise<void> => {
    try {
        return await REQUEST({
            method: 'GET',
            url: `${API_ADD_FAVORITES}/${botId}/toggle-favorite`
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getFavoritesChannel,
    changeFavoritesChannel
} as const