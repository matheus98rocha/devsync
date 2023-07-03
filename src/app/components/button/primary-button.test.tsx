import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; 

import PrimaryButton from "./primary-button.component";

describe("PrimaryButton", () => {
    const buttonName = "Click Me";

    it("verifies if the button is rendered correctly", () => {
        const handleOnClick = jest.fn();
        const { getByText } = render(<PrimaryButton buttonName={buttonName} handleOnClick={handleOnClick} />);

        return expect(getByText(buttonName)).toBeInTheDocument();
    });

    it("ensures that the handleOnClick function is called when the button is clicked", () => {
        const handleOnClick = jest.fn();
        const { getByText } = render(<PrimaryButton buttonName={buttonName} handleOnClick={handleOnClick} />);

        fireEvent.click(getByText(buttonName));
        return expect(handleOnClick).toHaveBeenCalledTimes(1);
    });
});