import React, { useState } from "react";
import { BsSunFill, BsMoon } from "react-icons/bs";
import { ToggleProps } from "./toggle.types";

const Toggle = ({ active, handleToggle }: ToggleProps) => {

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative rounded-full w-12 h-6 transition-colors ${
        active ? "bg-primary" : "bg-white"
      }
      shadow-lg
      `}
    >
      <div
        className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform ${
          active ? "translate-x-6 bg-white" : "bg-gray-300"
        }`}
      >
        {active ? (
          <BsSunFill className="text-primary" />
        ) : (
          <BsMoon className="text-gray-600" />
        )}
      </div>
    </button>
  );
};

export default Toggle;
