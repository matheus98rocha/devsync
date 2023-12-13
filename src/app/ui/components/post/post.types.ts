export interface PostProps {
    text: string; 
    image: string | null; 
    name: string | null;   
    isMyPost: boolean,
    
    // delete post modal prop types
    handleDeleteModal: (deletePostModal: boolean) => void,
    handleCancel: () => void,
    handleDelete: () => void,
    showDeleteModal: boolean,
    deleteModalMessage: string,
    isLoadingDeletePost: boolean,
};