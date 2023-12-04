export interface PostProps {
    handleDeleteModal: (deletePostModal: boolean) => void,
    text: string; 
    image: string; 
    name: string, 
    amIThePostOwner: string,
};