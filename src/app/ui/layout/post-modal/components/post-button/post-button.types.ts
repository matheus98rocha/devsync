import { ReactNode } from "react";

export interface PostButtonProps {
    textContent: string,
    iconContent: ReactNode,
    text: string,
    authorId: string,
    isLoading: boolean,
    handleIsLoading: (isLoading: boolean) => void,
    handleSubmitPost: () => void,
    handleShowError: () => void,
};