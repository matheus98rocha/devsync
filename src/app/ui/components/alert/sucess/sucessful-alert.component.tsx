import { FaCheckCircle } from "react-icons/fa";

const SucessfulAlert = ({ showAlert, message }: { showAlert: boolean, message: string }) => (
    <>
        {
            showAlert &&
            <div className="fixed top-5 right-24 flex items-center justify-center z-50">
                <div className="bg-green-500 text-white p-8 rounded shadow-lg">
                    <div className="flex items-center justify-center mb-4">
                        <FaCheckCircle className="text-4xl" />
                    </div>
                    <p className="text-lg font-semibold">{message}</p>
                </div>
            </div>
        }
    </>
);

export default SucessfulAlert;