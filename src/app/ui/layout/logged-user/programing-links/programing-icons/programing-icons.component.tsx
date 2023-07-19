import React from "react";
import { programingIcons } from "./mock/programing-icons";
import IconItem from "./icon-item/icon-item.component";
import { ProgramingIconsProps } from "./programing-icons.types";

function ProgramingIcons({ handleSetLanguage }: ProgramingIconsProps) {
  return (
    <div className="h-screen flex items-center justify-around flex-col p-4">
      {programingIcons.map((icon, index) => (
        <IconItem
          icon={icon.icon}
          key={index}
          label={icon.label}
          color={icon.color}
          handleSetLanguage={handleSetLanguage}
        />
      ))}
    </div>
  );
}

export default ProgramingIcons;
