export interface PostModalProps {
    handleCloseModal: () => void,
    canShowPostModal: boolean,
    text: string,
    handleText: (text: string) => void,
    selectedFile: File | null,
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};