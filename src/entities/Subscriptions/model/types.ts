
export interface IChannelSubscriptions {
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
    subscribersCount: number
}