export enum EnumPrimaryInputTypes {
  TEXT = "text",
  PASSWORD = "password",
}
export interface PrimaryInputProps {
  label: string;
  type: EnumPrimaryInputTypes;
  placeholder: string;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueInput: string;
}
