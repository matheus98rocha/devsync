export interface PostOptionsProps {
    handleDeleteModal: (deletePostModal: boolean) => void,
    amIThePostOwner: string,
    showOptions: boolean,
    handleShowOptions: (showOptions: boolean) => void,
};