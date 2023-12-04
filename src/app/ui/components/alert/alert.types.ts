export enum AlertEnum {
    SUCESS = "SUCESS",
    WARNING = "WARNING",
    ERROR = "ERROR",
};

export interface AlertProps {
    showAlert: boolean,
    message: string,
    type: AlertEnum,
};