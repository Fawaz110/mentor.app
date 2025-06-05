export interface Post {
    id: string,
    caption?: string,
    images: string[],
    likes: number,
    date: string,
    user: any
}