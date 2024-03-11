
export function useTelegram() {
    const webApp = window.Telegram.WebApp
    const initData = webApp.initData
    const onClose = () => {
        console.log('close')
        tg.close()
    }

    return {
        webApp,
        initData,
        onClose
    }
}