import {REQUEST} from '@/shared/api'

const API_FAVORITES: string = '/api/web-bot/subscriber/favorites/bot'

const getFavoritesChannel = async () => {
    try {
        return await REQUEST('GET', API_FAVORITES, {}
        )
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getFavoritesChannel,
} as const