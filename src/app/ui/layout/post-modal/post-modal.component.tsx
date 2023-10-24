import React from 'react';
import PrimaryButton from "../../components/button/primary-button.component";
import { PostModalProps } from "./post-modal.types";
import { AiFillPicture, AiOutlineClose } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import Image from "next/image";

const PostModal = ({
    canShowPostModal,
    handleCloseModal,
}: PostModalProps) => {
    const { data: session } = useSession();
    return (
        <>
            {canShowPostModal && (
                <div className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div
                        className="fixed inset-0 bg-zinc-800 opacity-60"
                        onClick={handleCloseModal}
                    ></div>
                    <div
                        className="relative gap-2 flex flex-col rounded-2xl border border-white bg-white p-4 shadow-lg sm:p-6 lg:p-8 animate-jump-in animate-delay-[1ms]"
                        role="alert"
                    >
                        <AiOutlineClose onClick={handleCloseModal} />
                        <Image
                            src={session?.user?.image as string}
                            width={60}
                            height={60}
                            priority={true}
                            alt="use-profile"
                            className="rounded-full"
                        />
                        <input type="text" placeholder="No que você está pensando?" />
                        <AiFillPicture />
                        <PrimaryButton
                            buttonContent="Publicar"
                            handleOnClick={() => alert("PUBLICADO")}
                            isDisabled={false}
                            buttonType="primary"
                            borderRadius="rounded-full"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default PostModal;