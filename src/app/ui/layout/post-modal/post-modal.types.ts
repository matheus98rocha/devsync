export interface PostModalProps {
    text: string,
    handleText: (text: string) => void,
    selectedFile: File | null,
    handleSelectedFile: (selectedFile: File | null) => void,
    handleCloseModal: () => void,
    handleSubmitPost: () => void,
    handleShowError: () => void,
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    canShowPostModal: boolean, 
};