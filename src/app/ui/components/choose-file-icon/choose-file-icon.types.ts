export interface ChooseFileIconProps {
    selectedFile: File | null,
    handleSelectedFile: (file: File | null) => void,
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};