import {REQUEST} from '@/shared/api'

const API_WEB_BOT_PROFILE: string = `/api/web-bot/profile`
const API_WEB_BOT_PROFILE_DEPOSIT : string = `${API_WEB_BOT_PROFILE}/deposit`

const getSubscriberInformation = async () => {
    try {
        return await REQUEST({
            method:'GET',
            url: API_WEB_BOT_PROFILE
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const topUpBalanceUser = async (amount: number) => {
    try {
        return await REQUEST({
            method:'POST',
            url: API_WEB_BOT_PROFILE_DEPOSIT,
            data: {
                amount: amount
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getSubscriberInformation,
    topUpBalanceUser
} as const