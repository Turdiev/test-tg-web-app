
export interface PurchaseHistoryByDate {
    date: string,
    totalAmount: string,
    history: PurchaseHistory[]
}

export interface PurchaseHistory {
    postId?: string,
    postPreview?: string,
    channelId: string,
    channelTitle: string,
    channelLink: string,
    botSellerName: string,
    botSellerUsername: string,
    botSellerLink: string,
    amount: number,
    createdAt: string,
    type: 'SUBSCRIPTION' | 'SINGLE_POST' | 'MULTI_POST' | 'DONATION' | 'DEPOSIT'
}

export interface PurchaseHistoryPrivateChannel {
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
    categoryId: string | null,
    botAdminName: string,
    botAdminUsername: string,
    botAdminLink: string,
    subscriptionId: string,
    subscriptionCreatedAt: string,
    subscriptionDateStart: string,
    subscriptionDateEnd: string
}

export interface SubscriberChannel {
    id: string,
    createdAt: string,
    telegramId: string,
    dateStart: string,
    dateEnd: string,
    isActive: boolean,
    channelId: string,
    subscriberId: string
}


export interface ITags {
    type: string,
    label: string,
    value: string
}