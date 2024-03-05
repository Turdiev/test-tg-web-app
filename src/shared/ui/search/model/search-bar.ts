import {defineStore} from 'pinia';
import {ref} from 'vue';

const namespace = 'search-bar'
export const useSearchBarStore = defineStore(namespace, () => {
    const searchQuery = ref<string>('')


    return {
        searchQuery
    }
})