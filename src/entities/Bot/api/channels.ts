import {REQUEST} from '@/shared/api'
import { API_WEB_BOT_INFLUENCE } from '@/entities/Bot';

const API_WEB_BOT_INFLUENCE_CHANNELS: string = `${API_WEB_BOT_INFLUENCE}/channels`

const getBotInfluenceChannels = async (botUsername: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: API_WEB_BOT_INFLUENCE_CHANNELS,
            headers: {
                WebAppBotUsername: botUsername
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getBotInfluenceChannelById = async (botUsername: string, channelId: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: `${API_WEB_BOT_INFLUENCE_CHANNELS}/${channelId}`,
            headers: {
                WebAppBotUsername: botUsername
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}


export const channelsApi = {
    getBotInfluenceChannels,
    getBotInfluenceChannelById
} as const