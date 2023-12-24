export interface ButtonProps {
    buttonText: string,
    buttonType: 'primary' | 'alert' | 'error' | 'outlined',
    handleOnClick: () => void,
    isDisabled: boolean
};