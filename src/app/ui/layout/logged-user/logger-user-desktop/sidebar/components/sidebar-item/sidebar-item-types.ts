import React from "react";
import { IconType } from "react-icons";

export interface SidebarItemProps {
  icon: IconType;
  isExpanded: boolean;
  label: string;
  handleClick?: () => void;
  currentRoute?: string;
  efectHoverItem?: false;
}
