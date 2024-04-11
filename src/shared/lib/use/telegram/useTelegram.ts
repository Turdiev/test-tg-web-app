import {computed} from "vue";

export function useTelegram() {
    const webApp = window.Telegram.WebApp
    const initData = webApp.initData

    const themeTelegram = computed(() => {
        return webApp.colorScheme
    })

    const secondaryThemeBgColor = computed(() => {
        const themeParams = webApp.themeParams

        return themeParams && (themeParams.bg_color === themeParams.secondary_bg_color || themeParams.bg_color === '#18222d') ? '#303d4f' : ''
    })

    const languageTelegram = computed(() => {
        const lang = webApp.initDataUnsafe.user?.language_code
        return ['ru', 'en'].includes(lang) ? lang : 'en'
    })

    const onClose = () => {
        console.log('close')
        webApp.close()
    }

    return {
        webApp,
        initData,
        themeTelegram,
        secondaryThemeBgColor,
        languageTelegram,
        onClose
    }
}