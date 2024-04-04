import {defineStore} from "pinia";
import {ref} from "vue";
import type {ProfileInfo} from "@/entities/Balance/model/types";
import {api} from "@/entities/Balance/api";


const namespace: string = 'profile'
export const useProfileStore = defineStore(namespace, () => {
    const profileInfo = ref<ProfileInfo>({})

    const fetchSubscriberInformation = async () => {
        try {
            const { response } = await api.getSubscriberInformation() as {
                response: ProfileInfo
            }

            profileInfo.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchTopUpBalanceUser = async (amount: number) => {
        try {
            const { response } = await api.topUpBalanceUser(amount) as {
                response: { url: string },
            }

            return response.url
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }


    return {
        profileInfo,
        fetchSubscriberInformation,
        fetchTopUpBalanceUser
    }
})