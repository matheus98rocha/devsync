import { IPost } from "@/app/interfaces/post";

export interface FeedProps {
  posts: IPost[];
  myUserId: string;
  name: string,
  image: string,
}
