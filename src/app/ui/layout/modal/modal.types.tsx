export interface ModalProps {
    onLogout: () => void,
    onCancel: () => void,
    modalTitle: string,
    modalMessage: string,
    logoutButtonType: "alert" | "primary" | "error",
    cancelButtonType: "alert" | "primary" | "error",
    isOnMobile: boolean,
};