export interface IPost {
  id: string;
  authorId: string;
  text: string;
}

export interface IMappedPost extends IPost {
  id: string;
  authorId: string;
  text: string;
  isAuthor: boolean;
  image: string;
}
