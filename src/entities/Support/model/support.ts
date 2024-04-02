
import {defineStore} from 'pinia';
import {ref} from 'vue';
import {api} from '@/entities/Support/api';
import type {ISupportArticle, ISupportQuestion} from '@/entities/Support/model/types';

const namespace = 'support'
export const useSupportStore = defineStore(namespace, () => {
    const supportArticleListing = ref<ISupportArticle[]>([])
    const supportQuestionListing = ref<ISupportQuestion[]>([])
    const foundSupportArticles = ref<ISupportArticle[]>([])
    const currentSupportArticle = ref<ISupportArticle>()

    const fetchSupportsArticles = async (): Promise<void> => {
        try {
            const {response: response} = await api.getSupportsArticles() as {
                response: ISupportArticle[]
            }

            supportArticleListing.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchSupportsArticleById = async (articleId: string): Promise<void> => {
        try {
            const {response: response} = await api.getSupportsArticlesById(articleId) as {
                response: ISupportArticle
            }

            currentSupportArticle.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchSupportsQuestions = async (): Promise<void> => {
        try {
            const {response: response} = await api.getSupportsQuestions() as {
                response: ISupportQuestion[]
            }

            supportQuestionListing.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchSupportsArticlesSearch = async (searchQuery: string): Promise<void> => {
        try {
            const {response: response} = await api.getSupportsArticlesSearch(searchQuery) as {
                response: ISupportArticle[]
            }

            foundSupportArticles.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }
    return {
        supportArticleListing,
        supportQuestionListing,
        foundSupportArticles,
        fetchSupportsArticles,
        fetchSupportsArticleById,
        fetchSupportsQuestions,
        fetchSupportsArticlesSearch
    }
})