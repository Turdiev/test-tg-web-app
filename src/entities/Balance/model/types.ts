
export interface ProfileInfo {
    "id": string,
    "createdAt": string,
    "telegramId": number,
    "firstName": string,
    "lastName": string,
    "username": string,
    "balance": {
        "id": string,
        "createdAt": string,
        "amount": number,
        "userId": string,
        "subscriberId": string
    }
}