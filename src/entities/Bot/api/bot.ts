import {REQUEST} from '@/shared/api'
import {API_WEB_BOT_INFLUENCE} from '@/entities/Bot';

const API_WEB_BOT_INFLUENCE_BOT: string = `${API_WEB_BOT_INFLUENCE}/bot`
const API_WEB_BOT_INFLUENCE_BOT_CREATOR : string = `${API_WEB_BOT_INFLUENCE_BOT}/creator`
const API_WEB_BOT_INFLUENCE_BOT_TOGGLE_FAVORITE : string = `${API_WEB_BOT_INFLUENCE_BOT}/toggle-favorite`

const getBotInfluenceInfoBot = async (botUsername: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: API_WEB_BOT_INFLUENCE_BOT,
            headers: {
                WebAppBotUsername: botUsername
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getBotInfluenceCreator = async (botUsername: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: API_WEB_BOT_INFLUENCE_BOT_CREATOR,
            headers: {
                WebAppBotUsername: botUsername
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getBotInfluenceToggleFavorites = async (botUsername: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: API_WEB_BOT_INFLUENCE_BOT_TOGGLE_FAVORITE,
            headers: {
                WebAppBotUsername: botUsername
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}


export const botApi = {
    getBotInfluenceInfoBot,
    getBotInfluenceCreator,
    getBotInfluenceToggleFavorites
} as const