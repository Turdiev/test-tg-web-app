import type {Component} from 'vue';

// Bot
export interface InfluenceBotInformation {
	id: string,
	createdAt: string,
	botSession: string,
	private: boolean,
	name: string,
	description: string,
	username: string,
	aboutText: string,
	welcomeMessage: string,
	referralLink: string,
	status: string,
	isAdminChannel: boolean,
	isFavorite: boolean
}
export interface InformationAuthorInfluenceBot {
	id: string,
	createdAt: string,
	username: string,
	firstName: string,
	lastName: string,
	phone: string,
	email: string,
	isActive: boolean,
	isEmailConfirmed: boolean,
	photo: {} | null,
	telegramId: number,
	premium: boolean,
	ownerId: string,
	verification: string,
	balance: {
		id: string,
		createdAt: string,
		amount: number,
		userId: string,
		subscriberId: string
	}
}

// Channels
export interface AllInfluenceBotChannels {
	id: string,
	createdAt: string,
	channelId: number,
	title: string,
	username: string,
	about: string,
	type: string,
	userId: string,
	botAdminId: string,
	isTrial: boolean,
	trialPeriod: number,
	cost: string,
	costType: string,
	preview: string,
	restrictSavingContent: boolean,
	photo: {} | null,
	subscribersCount: number
}
export interface InfluenceBotChannel {
	id: string,
	createdAt: string,
	channelId: number,
	title: string,
	username: string,
	about: string,
	type: string,
	userId: string,
	botAdminId: string,
	isTrial: boolean,
	trialPeriod: number,
	cost: string,
	costType: string,
	preview: string,
	restrictSavingContent: boolean,
	photo: {} | null,
	botAdmin: {
		id: string,
		createdAt: string,
		botSession: string,
		private: boolean,
		name: string,
		description: string,
		username: string,
		aboutText: string,
		welcomeMessage: string,
		referralLink: string,
		status: string,
		isAdminChannel: boolean
	},
	category: {
		id: string,
		createdAt: string,
		name: string
	},
	subscribersCount: number
}

// Posts
export interface InfluenceBotPost{
	id: string,
	createdAt: string,
	preview: string,
	type: string,
	publishTime: {} | null,
	autoRemove: {} | null,
	price: number,
	currencyType: string,
	allowComments: boolean,
	publishDay?: string | null,
	fullText?: string,
	multiPostId?: string | null,
	folderId?: string | null,
	channelId: {},
	previewMedia: [
		{
			id: string,
			createdAt: string,
			name: string,
			mimetype: string,
			type: string,
			telegramId: string,
			telegramObject: {} | null,
			ownerId: string,
			folderId: string,
			folder: {
				id: string,
				createdAt: string
			}
		}
	],
	fullMedia: [
		{
			id: string,
			createdAt: string,
			name: string,
			mimetype: string,
			type: string,
			telegramId: string,
			telegramObject: {},
			ownerId: string,
			folderId: string,
			folder: {
				id: string,
				createdAt: string
			}
		}
	],
	singlePosts: [
		{
			id: string,
			createdAt: string,
			preview: string,
			type: string,
			publishTime: {},
			autoRemove: {},
			price: number,
			currencyType: string,
			allowComments: boolean,
			channelId: {} | null,
			publishDay: string,
			fullText: string,
			multiPostId: {},
			folderId: string,
			previewMedia: [
				{
					id: string,
					createdAt: string,
					name: string,
					mimetype: string,
					type: string,
					telegramId: string,
					telegramObject: {} | null,
					ownerId: string,
					folderId: string,
					folder: {
						id: string,
						createdAt: string
					}
				}
			],
			fullMedia: [
				{
					id: string,
					createdAt: string,
					name: string,
					mimetype: string,
					type: string,
					telegramId: string,
					telegramObject: {} | null,
					ownerId: string,
					folderId: string,
					folder: {
						id: string,
						createdAt: string
					}
				}
			]
		}
	]
}

export interface BotFavorites {
	botId: string,
	subscriberId: string,
	isFavorite: boolean
}

export interface BueLinkString {
	url: string
}

export enum BotLinkType {
	Telegram = 'Telegram',
	VK = 'VK',
	Instagram = 'Instagram',
}

export interface BotLink {
	name: string,
	url: string,
	icon: Component
}