import React from "react";
import { IconItemProps } from "./icon-item.types";

function IconItem({
  icon: Icon,
  label,
  color,
  handleSetLanguage,
}: IconItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div
      onMouseOver={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={handleSetLanguage}
      className="flex items-center justify-center flex-col gap-3 relative"
    >
      <div className="h-4">
        {isExpanded && (
          <p style={{ color: color }} className={`slit-in-horizontal`}>
            {label}
          </p>
        )}
      </div>
      <Icon size={35} color={color} className="font-bold" />
    </div>
  );
}

export default IconItem;
