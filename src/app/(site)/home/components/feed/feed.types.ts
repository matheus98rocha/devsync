import { IPost } from "@/app/interfaces/post";

export interface FeedProps {
    posts: Array<IPost>,
    myUserId: string,
};