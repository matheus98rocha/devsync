import PrimaryButton from "../../components/button/primary-button.component";
import { LogoutModalProps } from "./logout-modal.types";

const LogoutModal = ({ onLogout, onCancel, isOnMobile }: LogoutModalProps) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="fixed inset-0 bg-gray opacity-60"></div>
            <div className="relative gap-2 flex flex-col rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
                <div className="w-full gap-4">
                    <h2 className="flex justify-center	text-center	 sm:text-lg">Tem certeza ?</h2>
                </div>
                <p className="mt-4 text-gray-500">Parece que você está tentando desconectar. Tem certeza de que deseja sair ?</p>
                <div className={isOnMobile ? "mt-6 flex flex-wrap gap-4" : "mt-6 sm:flex sm:gap-4"}>
                    <PrimaryButton buttonText="Desconectar" handleOnClick={onLogout} isDisabled={false} buttonType="error" />
                    <PrimaryButton buttonText="Cancelar" handleOnClick={onCancel} isDisabled={false} buttonType="alert" />
                </div>
            </div>
        </div>
    )
};

export default LogoutModal;