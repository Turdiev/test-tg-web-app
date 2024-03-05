
export function useTelegram() {
    const webApp = window.Telegram.WebApp
    const initData = window.Telegram.WebApp.initData
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