import axios from 'axios';
import { BASE_URL } from '@/shared/config'

export const http = axios.create({
    // baseURL: BASE_URL
})