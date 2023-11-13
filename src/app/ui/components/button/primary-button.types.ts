export interface ButtonProps {
    buttonContent: React.ReactNode,
    buttonType: 'primary' | 'alert' | 'error' | 'outlined',
    handleOnClick: () => Promise<any>,
    isDisabled: boolean,
    borderRadius?: "rounded" | "rounded-full"
};