interface IUseTimeout {
    setTimeoutId: (newValue: string) => void
    clearTimeoutId: () => void
}

export const useTimeout = (handler: (value: any) => void | Promise<void>, timeout: number): IUseTimeout => {
    let timeoutId: string | number | NodeJS.Timeout | null = null;

    function setTimeoutId(value: any): void {
        timeoutId = setTimeout(async () => {
            await handler(value)
        }, timeout)
    }

    function clearTimeoutId(): void {
        clearTimeout(timeoutId)
    }

    return {
        setTimeoutId,
        clearTimeoutId
    }
}