import { http } from '@/shared/api/base/http'
import { useTelegram } from '@/shared/lib/use'
import type { ConfigRequest } from '@/shared/api'

const tg = useTelegram()
const { initData } = tg

const dataAuth = 'query_id=AAEks893AAAAACSzz3cBwmgT&user=%7B%22id%22%3A2010100516%2C%22first_name%22%3A%22Turdiev%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22turdiev_rm%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1709560763&hash=cab6602623afc40e9e703276a3782b7a47776e7a2995c1bc598b29d88cb79c99'

export const REQUEST = (method: string, url: string, query = {}, data = {}) => {
    const requestConfig: ConfigRequest = {
        method,
        url,
        headers: {
            WebAppInitData: initData || dataAuth
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