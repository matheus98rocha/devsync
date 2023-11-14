export interface ModalFormProps {
    text: string,
    handleText: (text: string) => void,
    selectedFile: File | null,
    handleSelectedFile: (file: File | null) => void,
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleCloseModal: () => void,
};