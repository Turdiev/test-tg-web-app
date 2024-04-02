import {REQUEST} from '@/shared/api'

const API_SUPPORT: string = '/api/web-bot/support'
const API_SUPPORT_QUESTIONS: string = `${API_SUPPORT}/questions`
const API_SUPPORT_ARTICLES: string = `${API_SUPPORT}/articles`

const getSupportsQuestions = async () => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_SUPPORT_QUESTIONS
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getSupportsArticles = async () => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_SUPPORT_ARTICLES
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getSupportsArticlesById = async (articleId: string) => {
    try {
        return await REQUEST({
            method: 'GET',
            url: `${API_SUPPORT_ARTICLES}/${articleId}`
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

const getSupportsArticlesSearch = async (searchQuery: string) => {
    try {
        return await REQUEST({
            method: 'GET',
            url: API_SUPPORT_ARTICLES,
            query: {
                search: searchQuery
            }
        })
    } catch (e) {
        throw new Error(`ERROR: ${e}`)
    }
}

export const api = {
    getSupportsQuestions,
    getSupportsArticles,
    getSupportsArticlesById,
    getSupportsArticlesSearch
} as const