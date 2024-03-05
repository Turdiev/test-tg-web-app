import {useIsLoading} from "@/shared/lib/use";
import type { Ref } from 'vue'

interface IUseLoadingWrap {
    isLoading: Ref<boolean>
    runWithLoading: (handler: () => Promise<void>) => Promise<void>
}

export const useLoadingWrap = (): IUseLoadingWrap => {
    const { startLoading, finishLoading, isLoading } = useIsLoading()

    async function runWithLoading(handler: () => Promise<void>): Promise<void> {
        try {
            startLoading()
            await handler()
        } finally {
            finishLoading()
        }
    }

    return {
        isLoading,
        runWithLoading
    }
}