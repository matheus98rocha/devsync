import { BiSolidError } from "react-icons/bi";

const WarningAlert = ({ showAlert, message }: { showAlert: boolean, message: string }) => (
    <>
        {
            showAlert &&
            <div className="fixed top-5 right-24 flex items-center justify-center z-50">
                <div className="bg-alert text-white p-8 rounded shadow-lg">
                    <div className="flex items-center justify-center mb-4">
                        <BiSolidError className="text-5xl" />
                    </div>
                    <p className="text-lg font-semibold">{message}</p>
                </div>
            </div>
        }
    </>
);

export default WarningAlert;