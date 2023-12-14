import { IUser } from "./user";

export interface IPost {
    id: string,
    text: string,
    name: string | null,
    image: string | null,
    authorId: string,
    author?: IUser,
};

export interface ICurrentUserPost extends IPost {
    currentUserPost: boolean;
};