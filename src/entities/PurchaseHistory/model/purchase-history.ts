import {defineStore} from 'pinia';
import type {IPurchaseHistory} from '@/entities/PurchaseHistory/model/types';
import type {RouteParamValue} from 'vue-router';

const namespace = 'purchase-history'
export const usePurchaseHistoryStore = defineStore(namespace, () => {
    const dataHistory: IPurchaseHistory[] = [
        {
            date: 'Сегодня',
            total: '6 300 ₽',
            history: [
                {
                    id: '1',
                    avatar: '',
                    name: 'Пост #137',
                    username: '@channel_id',
                    type: {
                        name: 'Контент',
                        value: 'content'
                    },
                    price: '- 2 100 ₽'
                },
                {
                    id: '2',
                    avatar: '',
                    name: 'InternSheep 18+',
                    username: '@internsheep_bot',
                    type: {
                        name: 'Закрытый канал',
                        value: 'close-channel'
                    },
                    price: '- 2 100 ₽'
                },
                {
                    id: '3',
                    avatar: '',
                    name: 'QTIM Private',
                    username: '@qtim_bot',
                    type: {
                        name: 'Закрытый канал',
                        value: 'close-channel'
                    },
                    price: '- 2 100 ₽'
                }
            ]
        },
        {
            date: 'Вчера',
            total: '4 200 ₽',
            history: [
                {
                    id: '4',
                    price: '+2 100 ₽ ',
                    type: {
                        name: 'Пополнение баланса',
                        value: 'up-balance'
                    }
                },
                {
                    id: '5',
                    avatar: '',
                    name: 'InternSheep 18+',
                    username: '@internsheep_bot',
                    type: {
                        name: 'Закрытый канал',
                        value: 'close-channel'
                    },
                    price: '- 2 100 ₽'
                },
                {
                    id: '6',
                    avatar: '',
                    name: 'Пост #281',
                    username: '@veronika_bot',
                    type: {
                        name: 'Контент',
                        value: 'content'
                    },
                    price: '- 2 100 ₽'
                }
            ]
        }
    ]

    const getHistoryById = (id: string | RouteParamValue[]) => {
        let currentHistory = null
        dataHistory.forEach((item: IPurchaseHistory) => {
            const findHistory = item.history.find(history => history.id === id ? history : false)
            if (findHistory) {
                currentHistory = findHistory
            }
        })

        return currentHistory
    }

    return {
        dataHistory,
        getHistoryById
    }
})