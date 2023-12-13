import { IPost } from "@/app/interfaces/post";

export const handleMapPosts = (posts: IPost[], currentSession: string) => {
    return posts.map((post) => {
        return {
            ...post,
            currentUserPost: post.authorId === currentSession ? true : false,
        };
    });
};