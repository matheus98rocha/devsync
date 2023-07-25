import React from "react";
import { IconItemProps } from "./icon-item.types";
import Link from "next/link";

function IconItem({ icon: Icon, label, color, docLink }: IconItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <Link
      href={docLink}
      target="_blank"
      onMouseOver={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
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
    </Link>
  );
}

export default IconItem;
