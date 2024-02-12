
export interface IPurchaseHistory {
    date: string,
    total: string,
    history: IHistory[]
}

export interface IHistory {
    id: string,
    avatar?: string,
    name?: string,
    username?: string,
    type: IType,
    price: string
}

interface IType {
    name: string,
    value: 'up-balance' | 'close-channel' | 'content'
}


export interface ITags {
    type: string,
    label: string,
    value: string
}