import React from 'react';
import PrimaryButton from "../../components/button/primary-button.component";
import { PostModalProps } from "./post-modal.types";
import { AiFillPicture, AiOutlineClose } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import Image from "next/image";

const PostModal = ({
    canShowPostModal,
    handleCloseModal,
    text,
    handleText,
    selectedFile,
    handleFileChange,
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
                        gap-5 
                        flex 
                        flex-col 
                        rounded-2xl border 
                        border-white 
                        bg-white 
                        p-4
                        shadow-lg 
                        animate-jump-in 
                        animate-delay-[1ms]
                        "
                        role="alert">
                        <div className='flex w-full '>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={session?.user?.image as string}
                                    width={36}
                                    height={36}
                                    priority={true}
                                    alt="use-profile"
                                    className="rounded-full"
                                />
                                <p
                                    className='sm:text-lg text-sm'
                                >{session?.user?.name as string}</p>
                            </div>
                            <AiOutlineClose
                                className='absolute right-5 text-xl hover:text-gray duration-300 cursor-pointer'
                                onClick={handleCloseModal} />
                        </div>
                        <textarea
                            rows={4}
                            placeholder="No que você está pensando?"
                            value={text}
                            onChange={(e) => handleText(e.target.value)}
                            className="border-none outline-none sm:w-[30rem] w-[14rem]"
                        />
                        <label
                            className={`flex items-center ${selectedFile ? 'w-56 sm:w-64 pr-6' : 'w-14'} bg-[#f4f2ee] rounded-full cursor-pointer hover:shadow-postIcon duration-300`}>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <div className={`text-2xl flex items-center justify-center h-14 w-14 ${selectedFile && 'pl-6'}`}><AiFillPicture /></div>
                            <div className={`${selectedFile && "pl-3"} overflow-hidden`}>
                                {selectedFile &&
                                    <span className="whitespace-nowrap	overflow-hidden	text-ellipsis">{selectedFile["name"]}</span>}
                            </div>
                        </label>
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