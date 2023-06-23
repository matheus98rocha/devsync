export interface PrimaryInputProps {
  label: string;
  type: string;
  placeholder: string;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueInput: string;
}