export interface DeleteModalProps {
    message: string,
    handleDelete: () => void,
    handleCancel: () => void,
    showDeleteModal: boolean,
    isLoading: boolean,
};