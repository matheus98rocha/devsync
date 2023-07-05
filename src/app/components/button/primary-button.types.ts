import { buttonConfig } from "./config/buttonConfig";

export interface ButtonProps {
    buttonText: string,
    buttonType: keyof typeof buttonConfig,
    handleOnClick: () => void,
};