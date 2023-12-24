import React, { useState } from "react";
import { SidebarItemProps } from "./sidebar-item-types";
import { usePathname } from "next/navigation";

function SidebarItem({
  icon: Icon,
  isExpanded,
  label,
  handleClick,
  currentRoute,
  efectHoverItem = true,
}: SidebarItemProps) {
  const pathname = usePathname();
  const [showLabelOnCompress, setShowLabelOnCompress] = React.useState(false);
  return (
    <div
      key={currentRoute}
      className={`flex
      items-center
      justify-center
      gap-2
      ${pathname === currentRoute ? "bg-primary" : "none"}
      ${pathname === currentRoute ? "text-contrastBackground" : "text-black"}
      ${pathname === currentRoute ? "hover:bg-primaryFocus" : "none"}
      slit-in-horizontal
      p-4
      font-semibold
      hover:cursor-pointer`}
      onMouseOver={() => setShowLabelOnCompress(true)}
      onMouseLeave={() => setShowLabelOnCompress(false)}
      onClick={handleClick}
    >
      <Icon size={23} />
      {isExpanded && <p className="slit-in-horizontal">{label}</p>}
      {!isExpanded && showLabelOnCompress && efectHoverItem && (
        <div
          className="absolute
        left-28
        text-contrastBackground
        bg-primary
        inline-block
        w-32
        text-center
        rounded-md
        slit-in-horizontal
        "
        >
          {label}
        </div>
      )}
    </div>
  );
}

export default SidebarItem;
