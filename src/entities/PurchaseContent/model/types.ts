
export interface IPurchaseContentBot {
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
    purchaseCount: number,
    isFavorite: boolean
}

export interface IPurchaseContentChannel {
    id: string,
    createdAt: string,
    channelId: string,
    title: string,
    username: string | null,
    about: string,
    type: string,
    link: string,
    userId: string,
    botAdminId: string,
    isTrial: boolean,
    trialPeriod: number,
    cost: string,
    costType: string,
    preview: string,
    restrictSavingContent: boolean,
    photo: string | null,
    managerId: string | null,
    categoryId: string | null
}

export interface IPurchaseContentBotById {
    'postId': string,
    'postPreview': string,
    'channelId': string,
    'channelTitle': string,
    'channelLink': string,
    'botSellerName': string,
    'botSellerUsername': string,
    'botSellerLink': string,
    'amount': number,
    'createdAt': string,
    'type': string,
}