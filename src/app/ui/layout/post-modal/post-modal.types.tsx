export interface PostModalProps {
    handleCloseModal: () => void,
    canShowPostModal: boolean,
    text: string,
    handleText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    selectedFile: File | null,
    handleSelectedFile: (file: File | null) => void,
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    characterLimit: number,
    publish: any,
};