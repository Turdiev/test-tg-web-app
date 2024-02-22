export interface ICategoryListing {
    id: string,
    title: string,
    name: string
    channels: IChannel[]
}

export interface IChannel {
    id: string,
    title: string,
    amount_subscribers: number,
    description: string
    tags: string[]
}