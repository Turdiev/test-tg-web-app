import {defineStore} from 'pinia';

const namespace: string = 'support'
export const useSupportStore = defineStore(namespace, () => {
    const articleList = [
        {
            id: '1',
            title: 'Как убрать ограничение на каналы с отметкой 18+ от Telegram?'
        },
        {
            id: '2',
            title: 'Как начать продавать контент?'
        }
    ]

    return {
        articleList
    }
})