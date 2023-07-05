import React from "react";
import { ButtonProps } from "./primary-button.types";
import { buttonConfig } from "./config/buttonConfig";

const PrimaryButton = ({ buttonText, buttonType, handleOnClick }: ButtonProps) => {
    const { buttonColor, buttonColorHover, cursor } = buttonConfig[buttonType];
    return (
        <button
            className={`${buttonColor} ${buttonColorHover} duration-500 text-white font-bold ${cursor} outline-none border-none rounded text-base w-40 h-12`}
            onClick={handleOnClick}
        >
            {buttonText}
        </button>
    );
};

export default PrimaryButton;