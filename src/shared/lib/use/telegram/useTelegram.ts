import {computed} from "vue";

export function useTelegram() {
    const webApp = window.Telegram.WebApp
    const initData = webApp.initData

    const themeTelegram = computed(() => {
        return webApp.colorScheme
    })
    const onClose = () => {
        console.log('close')
        webApp.close()
    }

    return {
        webApp,
        initData,
        themeTelegram,
        onClose
    }
}