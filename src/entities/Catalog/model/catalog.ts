import {defineStore} from 'pinia';
import {computed, ref} from 'vue';
import type {ICatalogCategories, ICatalogChannel, ICategoryListing} from '@/entities/Catalog';
import {api} from '@/entities/Catalog/api';

const namespace = 'catalog'
export const useCatalogStore = defineStore(namespace, () => {
    const transitionFrom = ref('')
    const channelsListing = ref<ICatalogChannel[]>([])
    const foundChannelsListing = ref<ICatalogChannel[]>([])
    const categoriesListing = ref<ICatalogCategories[]>([])


    const creationOfCatalogs = computed<ICategoryListing[]>(() => {
        return channelsListing.value?.reduce((acc: ICategoryListing[], curr: ICatalogChannel) => {
            const currentCategory = curr.category
            const findCategory: ICategoryListing | undefined = acc.find((item: ICategoryListing) => {
                return item.id === currentCategory?.id || item.id === 'other'
            });

            if (findCategory) {
                findCategory.channels.push(curr);
            } else {
                if (currentCategory && currentCategory.id) {
                    acc?.push({
                        id: currentCategory.id,
                        name: currentCategory.name,
                        channels: [curr]
                    });
                } else {
                    acc?.push({
                        id: 'other',
                        name: 'Прочее',
                        channels: [curr]
                    });
                }

            }

            return acc
        }, [])
    })

    const fetchCatalogChannel = async () => {
        try {
            const {response: response} = await api.getCatalogChannel() as {
                response: { results: ICatalogChannel[] }
            }

            channelsListing.value = response.results
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchCatalogCategories = async () => {
        try {
            const {response: response} = await api.getCatalogCategories() as {
                response: ICatalogCategories[]
            }

            categoriesListing.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchCatalogChannelByCategoryId = async (categoryId: string) => {
        try {
            const {response: response} = await api.getCatalogCategories(categoryId) as {
                response: ICatalogCategories[]
            }

            categoriesListing.value = response
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const fetchSearchCatalogChannel = async (searchQuery: string) => {
        try {
            const {response: response} = await api.getSearchCatalogChannel(searchQuery) as {
                response: { results: ICatalogChannel[] }
            }

            foundChannelsListing.value = response.results
        } catch (e) {
            throw new Error(`ERROR: ${e}`)
        }
    }

    const getCurrentCategory = (name: string | string[]): ICategoryListing => {
        return creationOfCatalogs.value.find((category: ICategoryListing) => category.name === name )
    }

    return {
        channelsListing,
        categoriesListing,
        transitionFrom,
        creationOfCatalogs,
        foundChannelsListing,
        getCurrentCategory,
        fetchCatalogChannel,
        fetchCatalogCategories,
        fetchCatalogChannelByCategoryId,
        fetchSearchCatalogChannel
    }
})