import {REQUEST} from '@/shared/api'

const API_SUBSCRIPTIONS: string = '/api/web-bot/subscriber/subscriptions/channel'

const getChannelSubscriptions = async (searchQuery: string) => {
    try {
        return await REQUEST('GET', API_SUBSCRIPTIONS, {
                search: searchQuery
            }
        )
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getChannelSubscriptions,
} as const