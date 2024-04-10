import {computed} from "vue";

export function useTelegram() {
    const webApp = window.Telegram.WebApp
    const initData = webApp.initData

    const themeTelegram = computed(() => {
        return webApp.colorScheme
    })

    const darkThemeBgColor = computed(() => {
        console.log('bg_color', webApp.themeParams.bg_color)
        // console.log('bg_colorBol', webApp.themeParams.bg_color === '#18222d')
        console.log('bg_colorBol', webApp.themeParams.bg_color === '#212121')
        return webApp.themeParams && webApp.themeParams.bg_color === '#212121' ? '#303d4f' : ''
    })
    const onClose = () => {
        console.log('close')
        webApp.close()
    }

    return {
        webApp,
        initData,
        themeTelegram,
        darkThemeBgColor,
        onClose
    }
}