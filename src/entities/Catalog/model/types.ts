export interface ICategoryListing {
    id: string,
    title: string,
    name: string
    channels: ICatalogChannel[]
}

export interface ICatalogChannel {
    id: string,
    createdAt: string,
    channelId: number,
    title: string,
    username: string,
    about: string,
    type: string,
    userId: string,
    botAdminId: string,
    isTrial: boolean,
    trialPeriod: number,
    cost: string,
    link: string,
    costType: string,
    preview: string,
    restrictSavingContent: boolean,
    photo: object,
    botAdmin: {
        id: string,
        createdAt: string,
        botSession: string,
        private: boolean,
        name: string,
        description: string,
        username: string,
        aboutText: string,
        welcomeMessage: string,
        referralLink: string,
        status: string,
        isAdminChannel: boolean
    },
    category: {
        id: string,
        createdAt: string,
        name: string
    },
    subscribersCount: number
}

export interface ICatalogCategories {
    id: string,
    createdAt: string,
    name: string,
    channelsCount: number
}
