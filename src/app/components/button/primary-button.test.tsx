import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PrimaryButton from "./primary-button.component";

describe("PrimaryButton", () => {
    const buttonText = "Click Me";
    const buttonType = "primary";

    it("verifies if the button is rendered correctly", () => {
        const handleOnClick = jest.fn();
        const { getByText } = render(
            <PrimaryButton
                buttonText={buttonText}
                buttonType={buttonType}
                handleOnClick={handleOnClick}
            />
        );
        expect(getByText(buttonText)).toBeInTheDocument();
    });

    it("ensures that the handleOnClick function is called when the button is clicked", () => {
        const handleOnClick = jest.fn();
        const { getByText } = render(
            <PrimaryButton
                buttonText={buttonText}
                buttonType={buttonType}
                handleOnClick={handleOnClick}
            />
        );

        fireEvent.click(getByText(buttonText));
        expect(handleOnClick).toHaveBeenCalledTimes(1);
    });
});