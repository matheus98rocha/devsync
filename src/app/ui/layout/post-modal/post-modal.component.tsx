"use client"

import { AiOutlineClose } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import Image from "next/image";
import ModalForm from './components/modal-form/modal-form.component';
import { PostModalProps } from './post-modal.types';

const PostModal = ({
    text,
    myUserId,
    image,
    name,
    handleText,
    selectedFile,
    handleSelectedFile,
    canShowPostModal,
    handleFileChange,
    handleCloseModal,
    handleSubmitPost,
    handleShowError,
}: PostModalProps) => {
    const { data: session } = useSession();
    return (
        <>
            {canShowPostModal && (
                <div className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                    <div className="fixed inset-0 bg-zinc-800 opacity-60" onClick={handleCloseModal}></div>
                    <div
                        className="
                        relative 
                        gap-10
                        flex 
                        flex-col 
                        rounded-lg 
                        border 
                        border-white 
                        bg-white 
                        p-4
                        shadow-lg 
                        animate-jump-in 
                        animate-delay-[1ms]
                        "
                        role="alert">

                        {/* picture and user's name */}
                        <div className='flex w-full '>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={session?.user?.image as string}
                                    width={48}
                                    height={48}
                                    priority={true}
                                    alt="use-profile"
                                    className="rounded-full"
                                />
                                <p className='sm:text-base text-sm'>{session?.user?.name as string}</p>
                            </div>
                            <AiOutlineClose
                                className='absolute right-5 text-xl hover:text-gray duration-300 cursor-pointer'
                                onClick={handleCloseModal} />
                        </div>
                        <ModalForm
                            handleFileChange={handleFileChange}
                            handleSubmitPost={handleSubmitPost}
                            handleSelectedFile={handleSelectedFile}
                            handleText={handleText}
                            selectedFile={selectedFile}
                            text={text}
                            myUserId={myUserId}
                            name={name}
                            image={image}
                            handleShowError={handleShowError}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default PostModal;