export interface PostModalProps {
    handleCloseModal: () => void,
    canShowPostModal: boolean,
    text: string,
    handleText: (text: string) => void,
    selectedFile: File | null,
    handleSelectedFile: (file: File | null) => void,
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    characterLimit: number,
};