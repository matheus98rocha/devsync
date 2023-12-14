import { ReactNode } from "react";

export interface PostButtonProps {
    textContent: string,
    iconContent: ReactNode,
    text: string,
    myUserId: string,
    name: string,
    image: string,
    isLoading: boolean,
    handleIsLoading: (isLoading: boolean) => void,
    handleSubmitPost: () => void,
    handleShowError: () => void,
};