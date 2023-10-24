export interface ButtonProps {
    buttonContent: React.ReactNode,
    buttonType: 'primary' | 'alert' | 'error' | 'outlined',
    handleOnClick: () => void,
    isDisabled: boolean,
    borderRadius?: "rounded" | "rounded-full"
};