

import {defineStore} from 'pinia';
import {ref} from 'vue';
import {api} from '@/entities/Subscriptions/api';
import type {IChannelSubscriptions} from '@/entities/Subscriptions/model/types';

const namespace = 'subscriptions'
export const useSubscriptionsStore = defineStore(namespace, () => {
    const channelSubscriptions = ref<IChannelSubscriptions[]>([])
    const foundChannelSubscriptions = ref<IChannelSubscriptions[]>([])
    const isShowSearchBar = ref(false)

    const fetchChannelSubscriptions = async (): Promise<void> => {
        try {
            const {response: response} = await api.getChannelSubscriptions() as {
                response: {
                    results: IChannelSubscriptions[]
                }
            }

            channelSubscriptions.value = response.results
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchSearchChannelSubscriptions = async (searchQuery: string = ''): Promise<void> => {
        try {
            const {response: response} = await api.getChannelSubscriptions(searchQuery) as {
                response: {
                    results: IChannelSubscriptions[]
                }
            }

            foundChannelSubscriptions.value = response.results
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }
    return {
        channelSubscriptions,
        foundChannelSubscriptions,
        isShowSearchBar,
        fetchChannelSubscriptions,
        fetchSearchChannelSubscriptions
    }
})