import React from "react";
import { ButtonProps } from "./primary-button.types";

const PrimaryButton = ({ buttonName, handleOnClick }: ButtonProps) => (
    <button
        className="bg-primary text-white font-bold font-Gothic cursor-pointer outline-none border-none rounded text-base w-40 h-12"
        onClick={handleOnClick}>
        {buttonName}
    </button>
);

export default PrimaryButton;