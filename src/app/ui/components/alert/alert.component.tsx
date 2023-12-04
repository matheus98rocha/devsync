import { AlertProps } from "./alert.types";

const Alert = ({ showAlert, message, type }: AlertProps) => {
    const styles = {
        SUCESS: "bg-green-100 border-l-4 border-green-500 text-green-700 p-4 flex flex-col gap-2",
        WARNING: "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 flex flex-col gap-2",
        ERROR: "bg-red-100 border-l-4 border-error text-error p-4 flex flex-col gap-2",
    };
    return (
        <>
            {
                showAlert &&
                <div className={`fixed top-5 right-24 flex items-center justify-center z-50`} role="alert">
                    <div className={styles[type]}>
                        <p className="font-bold">{type}</p>
                        <p>{message}</p>
                    </div>
                </div>
            }
        </>
    )
};

export default Alert;