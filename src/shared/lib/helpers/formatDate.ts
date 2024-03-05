
export function formatDateTime(dateTimeString: string): string {
    const options = { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }
    const dateTime = new Date(dateTimeString)

    return dateTime.toLocaleDateString('ru-RU', options)
}

export function definitionsDate (dateString: string): string {
    const date = new Date(dateString)
    const today = new Date()

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === new Date(today.setDate(today.getDate() - 1)).toDateString();

    if (isToday) return 'Сегодня';
    if (isYesterday) return 'Вчера';

    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);

    return `${day}-${month}-${date.getFullYear()}`;
}