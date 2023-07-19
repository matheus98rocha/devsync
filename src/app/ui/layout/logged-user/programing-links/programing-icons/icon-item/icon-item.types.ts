import { IconType } from "react-icons";

export interface IconItemProps {
  icon: IconType;
  label: string;
  color: string;
  handleSetLanguage: () => void;
}
