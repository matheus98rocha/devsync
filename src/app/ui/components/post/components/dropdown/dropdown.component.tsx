import React from "react";
import { DropdownProps } from "./dropdown.types";

const Dropdown = ({ checkPostOptions, options }: DropdownProps) => (
    <div className="bg-white shadow-md rounded-md overflow-hidden mt-2"
        onClick={checkPostOptions}>
        <ul className="py-2">
            {options.map((option, index) => (
                <li key={index} className="flex items-center justify-center px-4 py-2 w-[15rem] hover:bg-gray-100 cursor-pointer">
                    <div
                        className="flex justify-center py-2 w-full items-center gap-2 hover:bg-primary-hover hover:rounded hover:text-white"
                    >
                        <p>{option.icon}</p>
                        <p>{option.label}</p>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default Dropdown;