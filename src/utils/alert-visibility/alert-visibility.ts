export const handleAlertVisibility = (handleAlert: (boolean: boolean) => void) => {
    handleAlert(true);
    setTimeout(() => {handleAlert(false)}, 6000);
};