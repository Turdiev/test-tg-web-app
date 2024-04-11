import { defineStore } from 'pinia';
import {botApi, BotFavorites, channelsApi, postsApi} from '@/entities/Bot';
import type {
	AllInfluenceBotChannels,
	InfluenceBotInformation,
	InformationAuthorInfluenceBot,
	InfluenceBotPost,
	InfluenceBotChannel,
	BueLinkString
} from '@/entities/Bot';
import {ref} from 'vue';
import type {LocationQueryValue, RouteParamValue} from 'vue-router';

const namespace: string = 'bot'
export const useBotStore = defineStore(namespace, () => {
	const influenceBotInformation = ref<InfluenceBotInformation | null>(null)
	const informationAuthorInfluenceBot = ref<InformationAuthorInfluenceBot | null>(null)
	const allChannelPosts = ref<InfluenceBotPost[]>([])
	const currentChannelPost = ref<InfluenceBotPost>({})
	const allInfluenceBotChannels = ref<AllInfluenceBotChannels[]>([])
	const isFavoriteInfluenceBot = ref<boolean | null>(null)



	const fetchInfoInfluenceBot = async (botUsername: string | RouteParamValue[]) => {
		try {
			const { data } = await botApi.getBotInfluenceInfoBot(botUsername) as {
				code: number,
				data: InfluenceBotInformation,
				message: string
			}

			influenceBotInformation.value = data
			isFavoriteInfluenceBot.value = data.isFavorite
		} catch (e) {
			throw new Error(`ERROR: ${e}`)
		}
	}

	const fetchInfoInfluenceBotAuthor = async (botUsername: string | RouteParamValue[]) => {
		try {
			const { data } = await botApi.getBotInfluenceCreator(botUsername) as {
				code: number,
				data: InformationAuthorInfluenceBot,
				message: string
			}

			informationAuthorInfluenceBot.value = data
		} catch (e) {
			throw new Error(`ERROR: ${e}`)
		}
	}

	const fetchInfluenceToggleFavorites = async (botUsername: string | RouteParamValue[]) => {
		try {
			const { data } = await botApi.getBotInfluenceToggleFavorites(botUsername) as {
				code: number,
				data: BotFavorites,
				message: string
			}

			isFavoriteInfluenceBot.value = data.isFavorite
		} catch (e) {
			throw new Error(`ERROR: ${e}`)
		}
	}

	const fetchAllChannelPosts = async (botUsername: string | RouteParamValue[], channelId: string | null | LocationQueryValue[]) => {
		try {
			const { data } = await postsApi.getBotInfluencePosts(botUsername, channelId) as {
				code: number,
				data: InfluenceBotPost[],
				message: string
			}

			allChannelPosts.value = data
		} catch (e) {
			throw new Error(`ERROR: ${e}`)
		}
	}

	const fetchChannelPostById = async (botUsername: string | RouteParamValue[], postId: string | RouteParamValue[]) => {
		try {
			const { data } = await postsApi.getBotInfluencePostById(botUsername, postId) as {
				code: number,
				data: InfluenceBotPost,
				message: string
			}

			currentChannelPost.value = data
		} catch (e) {
			throw new Error(`ERROR: ${e}`)
		}
	}

	const fetchBotInfluenceBueLink = async (botUsername: string | RouteParamValue[], postId: string) => {
		try {
			const { data } = await postsApi.getBotInfluenceBuePost(botUsername, postId) as {
				code: number,
				data: BueLinkString,
				message: string
			}

			return data.url
		} catch (e) {
			throw new Error(`ERROR: ${e}`)
		}
	}

	const fetchInfluenceChannels = async (botUsername: string | RouteParamValue[]) => {
		try {
			const { data } = await channelsApi.getBotInfluenceChannels(botUsername) as {
				code: number,
				data: AllInfluenceBotChannels[],
				message: string
			}

			allInfluenceBotChannels.value = data
		} catch (e) {
			throw new Error(`ERROR: ${e}`)
		}
	}

	const fetchInfluenceChannelById = async (botUsername: string | RouteParamValue[], channelId: string | null | LocationQueryValue[]) => {
		try {
			const { data } = await channelsApi.getBotInfluenceChannelById(botUsername, channelId) as {
				code: number,
				data: InfluenceBotChannel,
				message: string
			}

			return data
		} catch (e) {
			throw new Error(`ERROR: ${e}`)
		}
	}

	return {
		influenceBotInformation,
		informationAuthorInfluenceBot,
		allChannelPosts,
		currentChannelPost,
		allInfluenceBotChannels,
		isFavoriteInfluenceBot,
		fetchInfoInfluenceBot,
		fetchInfoInfluenceBotAuthor,
		fetchInfluenceToggleFavorites,
		fetchAllChannelPosts,
		fetchChannelPostById,
		fetchBotInfluenceBueLink,
		fetchInfluenceChannels,
		fetchInfluenceChannelById

	}
})