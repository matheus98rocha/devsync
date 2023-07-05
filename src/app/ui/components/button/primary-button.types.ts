export interface ButtonProps {
    buttonText: string,
    buttonType: 'primary' | 'alert' | 'error',
    handleOnClick: () => void,
    isDisabled: boolean
};