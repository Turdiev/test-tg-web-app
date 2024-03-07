
export interface IFavoritesChannel {
    id: string,
    createdAt: string,
    botSession: string | null,
    private: boolean,
    name: string,
    description: string | null,
    username: string,
    aboutText: string | null,
    welcomeMessage: string | null,
    referralLink: string,
    status: string,
    ownerId: string,
    isAdminChannel: boolean,
    channelCount: number,
    isFavorite: boolean
}