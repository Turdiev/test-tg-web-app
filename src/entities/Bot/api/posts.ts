import {REQUEST} from '@/shared/api'
import {API_WEB_BOT_INFLUENCE} from '@/entities/Bot';

const API_WEB_BOT_INFLUENCE_POSTS: string = `${API_WEB_BOT_INFLUENCE}/posts`
const API_WEB_BOT_INFLUENCE_POSTS_BUE_POST : string = `${API_WEB_BOT_INFLUENCE_POSTS}/buy-post`

const getBotInfluencePosts = async (botUsername: string, channelId: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: API_WEB_BOT_INFLUENCE_POSTS,
            query: {
                channelId
            },
            headers: {
                WebAppBotUsername: botUsername
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getBotInfluencePostById = async (botUsername: string, postId: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: `${API_WEB_BOT_INFLUENCE_POSTS}/${postId}`,
            headers: {
                WebAppBotUsername: botUsername
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getBotInfluenceBuePost = async (botUsername: string, postId: string) => {
    try {
        return await REQUEST({
            method:'GET',
            url: `${API_WEB_BOT_INFLUENCE_POSTS_BUE_POST}/${postId}`,
            headers: {
                WebAppBotUsername: botUsername
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}


export const postsApi ={
    getBotInfluencePosts,
    getBotInfluencePostById,
    getBotInfluenceBuePost
} as const