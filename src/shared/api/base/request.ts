import { http } from '@/shared/api/base/http'
import { useTelegram } from '@/shared/lib/use'
import type { ConfigRequest } from '@/shared/api'

const { initData } = useTelegram()

const dataAuth = 'query_id=AAEks893AAAAACSzz3fezcVN&user=%7B%22id%22%3A2010100516%2C%22first_name%22%3A%22Turdiev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22turdiev_rm%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1711384803&hash=504eb1c5ad2630735fe730eb42484f343f7b299abf3951c14868cfba5957b786'
const dataAuthInfluence = 'query_id=AAEks893AAAAACSzz3clsXjS&user=%7B%22id%22%3A2010100516%2C%22first_name%22%3A%22Turdiev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22turdiev_rm%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1711442844&hash=4e8dc5c704dd58a55edcc36eafbb5110a0405910f33faae4e7076abba9e40a7e'

export const REQUEST = ({ method, url, query = {}, data = {}, headers = {} }) => {
    const requestConfig: ConfigRequest = {
        method,
        url,
        headers: {
            WebAppInitData: initData || dataAuthInfluence,
            ...headers
        }
    }

    if (Object.keys(query).length !== 0) {
        requestConfig.params = query
    }

    if (Object.keys(data).length !== 0) {
        requestConfig.data = data
    }

    return http(requestConfig).then(res => res.data)
}