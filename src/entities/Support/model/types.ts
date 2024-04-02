
export interface ISupportItem {
    id: string,
    createdAt: string,
}

export interface ISupportArticle extends ISupportItem{
    title: string,
    text: string
}

export interface ISupportQuestion extends ISupportItem{
    text: string,
    answer: string
}