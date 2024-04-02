import {useBotStore} from '@/entities/Bot';
import type {RouteParamValue} from 'vue-router';


export const useBotAddToFavorite = () => {

    const botStorage = useBotStore()
    const { fetchInfluenceToggleFavorites } = botStorage

    const changeToFavorite = async (botUsername: string | RouteParamValue[]) => {
        await fetchInfluenceToggleFavorites(botUsername)
    }

    return {
        changeToFavorite
    }
}