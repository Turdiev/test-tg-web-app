
import type { Ref } from 'vue'
import {ref} from 'vue';

interface IUseIsSearchBar {
    isShowSearchBar: Ref<boolean>
    showSearchBar: () => void
    hideSearchBar: () => void
}

export const useSearchBar = (): IUseIsSearchBar => {
    const isShowSearchBar = ref(false)

    const showSearchBar = () => {
        isShowSearchBar.value = true
    }

    const hideSearchBar = () => {
        isShowSearchBar.value = false
    }

    return {
        isShowSearchBar,
        showSearchBar,
        hideSearchBar
    }
}