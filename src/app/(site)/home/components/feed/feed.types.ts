import { IUser } from "@/app/interfaces/user";
import { IPost } from "@/app/interfaces/post";

export interface FeedProps {
    Posts: Array<IPost>,
    users: Array<IUser>,
    myUserId: string,
};