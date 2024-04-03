import {ref} from 'vue';
import {defineStore} from 'pinia';

interface CachedMedia {
    fileName: string,
    src: string
}

export const useCachedMediaStore = defineStore('media-cash', () => {
    const cachedMedia = ref<CachedMedia[]>([])

    const setCachedMedia = (media: CachedMedia) => {
        cachedMedia.value.push(media)
    }

    return {
        cachedMedia,
        setCachedMedia
    }
})