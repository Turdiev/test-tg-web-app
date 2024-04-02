import {REQUEST} from '@/shared/api'
import type {RouteParamValue} from 'vue-router';

const API_WEB_BOT_MEDIA: string = '/api/web-bot-influencer/media'
const API_WEB_BOT_MEDIA_VIDEO : string = `${API_WEB_BOT_MEDIA}/video`

const getBotMedia = async (botUsername: string | RouteParamValue[], hash: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: API_WEB_BOT_MEDIA,
            query: {
                media: hash
            },
            headers: {
                WebAppBotUsername: botUsername,
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getBotMediaVideoPart = async (botUsername: string | RouteParamValue[], hash: string | undefined, part: number) => {
    try {
        return await REQUEST({
            method:'GET',
            url: API_WEB_BOT_MEDIA_VIDEO,
            query: {
                hash: hash,
                part: part
            },
            headers: {
                WebAppBotUsername: botUsername,
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}


export const api = {
    getBotMedia,
    getBotMediaVideoPart,
} as const