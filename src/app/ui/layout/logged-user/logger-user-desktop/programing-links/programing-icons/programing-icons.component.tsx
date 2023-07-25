import React from "react";
import { programingIcons } from "./mock/programing-icons";
import IconItem from "./icon-item/icon-item.component";

function ProgramingIcons() {
  return (
    <div className="h-screen flex items-center justify-around flex-col p-4 slit-in-horizontal">
      {programingIcons.map((icon, index) => (
        <IconItem
          icon={icon.icon}
          label={icon.label}
          color={icon.color}
          key={index}
          docLink={icon.link}
        />
      ))}
    </div>
  );
}

export default ProgramingIcons;
