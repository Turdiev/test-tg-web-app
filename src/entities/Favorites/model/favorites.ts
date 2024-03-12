

import {defineStore} from 'pinia';
import {ref} from 'vue';
import {api} from "@/entities/Favorites/api";
import type {IFavoritesChange, IFavoritesChannel} from "@/entities/Favorites/model/types";


const namespace = 'favorites'
export const useFavoritesStore = defineStore(namespace, () => {
    const channelFavorites = ref<IFavoritesChannel[]>([])

    const fetchFavoritesChannel = async (): Promise<void> => {
        try {
            const {response: response} = await api.getFavoritesChannel() as {
                response: {
                    results: IFavoritesChannel[]
                }
            }

            channelFavorites.value = response.results
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchChangeFavorites = async (botId: string): Promise<void> => {
        try {
            const {response: response} = await api.changeFavoritesChannel(botId) as {
                response: IFavoritesChange
            }

            return response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }


    return {
        channelFavorites,
        fetchFavoritesChannel,
        fetchChangeFavorites
    }
})