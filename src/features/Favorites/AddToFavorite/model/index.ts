import {useFavoritesStore} from '@/entities/Favorites/model';


export const useAddToFavorite = () => {

    const favoriteStorage = useFavoritesStore()
    const { fetchChangeFavorites } = favoriteStorage

    const changeToFavorite = async (botId: string) => {
        return await fetchChangeFavorites(botId)
    }

    return {
        changeToFavorite
    }
}