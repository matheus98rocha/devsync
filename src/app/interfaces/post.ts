import { IUser } from "./user";

export interface IPost {
    id: string;
    authorId?: string;
    text: string;
    author?: IUser;
};

export interface ICurrentUserPost extends IPost {
    currentUserPost: boolean;
    image: string | null;
    name: string | null;
};