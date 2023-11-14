export interface TextAreaProps {
    text: string,
    characterLimit: number,
    handleText: (text: string) => void,
    placeholder: string,
};