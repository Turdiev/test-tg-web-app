
const tg = window.Telegram.WebApp
export function useTelegram() {
    const onClose = () => {
        console.log('close')
        tg.close()
    }

    return {
        tg,
        onClose
    }
}