import {defineStore} from 'pinia';
import {ref} from 'vue';
import type {ICategoryListing} from '@/entities/Catalog';

const namespace = 'catalog'
export const useCatalogStore = defineStore(namespace, () => {
    const transitionFrom = ref('')
    const categoryListing = ref<ICategoryListing[]>([
        {
            id: '1',
            title: 'Дизайн',
            name: 'design',
            channels: [
                {
                    id: 'channel-1',
                    title: 'Команда Fidsty',
                    amount_subscribers: 100,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-2',
                    title: 'QTIM Private',
                    amount_subscribers: 200,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-3',
                    title: 'Союз дизайнеров России',
                    amount_subscribers: 3300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-4',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-5',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                }
            ]
        },
        {
            id: '2',
            title: '3D-графика',
            name: '3D-graphics',
            channels: [
                {
                    id: 'channel-1',
                    title: 'Команда Fidsty',
                    amount_subscribers: 100,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-2',
                    title: 'QTIM Private',
                    amount_subscribers: 200,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-3',
                    title: 'Союз дизайнеров России',
                    amount_subscribers: 3300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-4',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-4',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                }
            ]
        },
        {
            id: '3',
            title: 'Motion Design',
            name: 'motion-design',
            channels: [
                {
                    id: 'channel-1',
                    title: 'Команда Fidsty',
                    amount_subscribers: 100,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+']
                },
                {
                    id: 'channel-2',
                    title: 'QTIM Private',
                    amount_subscribers: 200,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-3',
                    title: 'Союз дизайнеров России',
                    amount_subscribers: 3300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: [ 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-4',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-4',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-4',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Motion', 'Инфобизнес', 'Криптовалюта']
                }
            ]
        },
        {
            id: '4',
            title: '18+Sensitive Content',
            name: '18+-Sensitive Content',
            channels: [
                {
                    id: 'channel-1',
                    title: 'Команда Fidsty',
                    amount_subscribers: 100,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-2',
                    title: 'QTIM Private',
                    amount_subscribers: 200,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-3',
                    title: 'Союз дизайнеров России',
                    amount_subscribers: 3300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-4',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                },
                {
                    id: 'channel-4',
                    title: 'Ilyas Aitkulov Official 18+',
                    amount_subscribers: 1300,
                    subscribers: 122,
                    description: 'Всем приветик, недавно на Fidsty короче зарегистрировался и сейчас тут продаю контент который мне нравится создавать именно для вас, и только на этой площадке) Йоу!',
                    tags: ['Творчество', 'Дизайн', '18+', 'Motion', 'Инфобизнес', 'Криптовалюта']
                }
            ]
        },
    ])

    const getCurrentCategory = (name: string): ICategoryListing => {
        return categoryListing.value.find((category: ICategoryListing) => category.name === name )
    }

    return {
        categoryListing,
        transitionFrom,
        getCurrentCategory
    }
})