
import type { Ref } from 'vue'
import {ref} from "vue";

interface IUseIsLoading {
    isLoading: Ref<boolean>
    startLoading: () => void
    finishLoading: () => void
}

export const useIsLoading = (): IUseIsLoading => {
    const isLoading = ref(false)

    const startLoading = () => {
        isLoading.value = true
    }

    const finishLoading = () => {
        isLoading.value = false
    }

    return {
        isLoading,
        startLoading,
        finishLoading
    }
}