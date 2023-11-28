import PrimaryButton from "../../components/button/primary-button.component";
import { GoAlertFill } from "react-icons/go";

const DeleteModal = ({
    message,
    showDeleteModal,
    handleDelete,
    handleCancel,
}: {
    message: string,
    handleDelete: () => void,
    handleCancel: () => void,
    showDeleteModal: boolean
}) => {
    return (
        <>
            {showDeleteModal && (
                <div className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div
                        className="fixed inset-0 bg-zinc-800 opacity-60"
                        onClick={handleCancel}
                    ></div>
                    <div
                        className="relative gap-2 flex flex-col rounded-2xl border border-blue-100 bg-contrastBackground p-4 shadow-lg sm:p-6 lg:p-8 animate-jump-in animate-delay-[1ms]"
                        role="alert"
                    >
                        <div className="w-full flex items-center justify-center">
                            <GoAlertFill className="text-error" size={45} />
                        </div>
                        <h2 className="mt-4 text-center text-xl text-gray-500">Tem certeza?</h2>
                        <p className="text-center text-gray-500">{message}</p>
                        <div className="mt-6 flex flex-wrap gap-4 lg:grid lg:grid-cols-2 lg:gap-4">
                            <PrimaryButton
                                buttonContent="Remover"
                                handleOnClick={handleDelete}
                                isDisabled={false}
                                buttonType="error"
                                borderRadius="rounded"
                            />
                            <PrimaryButton
                                buttonContent="Cancelar"
                                handleOnClick={handleCancel}
                                isDisabled={false}
                                buttonType="outlined"
                                borderRadius="rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteModal;