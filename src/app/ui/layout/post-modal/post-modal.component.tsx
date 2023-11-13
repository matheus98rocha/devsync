"use client"

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
    handleSelectedFile,
    handleFileChange,
    characterLimit,
    publish,
}: PostModalProps) => {
    const { data: session } = useSession();
    const remainingCharacters = characterLimit - text.length;
    const characterCounter = remainingCharacters < 0 ? 'text-red-500' : 'text-primary';
    console.log(text);
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

                        {/* text area */}
                        <div className='flex flex-col gap-5'>
                            <textarea
                                placeholder="No que você está pensando?"
                                value={text}
                                // onChange={(e) => handleText(e.target.value)}
                                onChange={(e) => handleText(e)}
                                className="resize-none border-none outline-none sm:w-[40rem] sm:h-[15rem] w-[14rem] h-[8rem]"
                            />
                            {/* characters limit per post */}
                            <div className={`text-sm ${characterCounter}`}>
                                {remainingCharacters} / {characterLimit}
                            </div>
                        </div>

                        {/* file icon */}

                        <div className={`flex items-center h-14 ${selectedFile ? 'w-56 sm:w-64 pr-6 gap-5 justify-between' : 'w-14 justify-center'} bg-[#f4f2ee] rounded-full cursor-pointer hover:shadow-postIcon duration-300`}>
                            <label className={`flex items-center justify-center ${!selectedFile && "w-full h-full cursor-pointer"}`}>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <div className={`text-2xl flex items-center justify-center ${selectedFile && 'pl-6'}`}><AiFillPicture /></div>
                            </label>
                            <div className={`flex items-center justify-center overflow-hidden duration-300`}>
                                {selectedFile &&
                                    <span className="max-w-[128px] text-sm whitespace-nowrap overflow-hidden text-ellipsis">{selectedFile["name"]}</span>
                                }
                            </div>
                            {selectedFile && <div> <AiOutlineClose className={"text-[1.3em] hover:text-gray duration-300"} onClick={() => handleSelectedFile(null)} /></div>}
                        </div>


                        {/* post button */}
                        <PrimaryButton
                            buttonContent="Publicar"
                            handleOnClick={async () => {
                                try {
                                    const result = await publish();
                                    console.log(result);
                                    return result;
                                } catch { console.error("Error creating post")}}}
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