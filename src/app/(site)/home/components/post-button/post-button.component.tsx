import React from "react";
import { PostButtonProps } from "./post-button.types";

const PostButton = ({ handlePostModalVisibility }: PostButtonProps) => {
    return (
        <div className="
        w-full
        h-auto
        border
       border-[#d0d0d0]
        shadow-md
        rounded-lg
        flex
        items-center
        justify-center
        flex-col
        p-4
        gap-6
        animate-fade-up
        cursor-pointer
        "
            onClick={() => handlePostModalVisibility(true)}
        >
            <p className="opacity-50">Começar uma publicação</p>
        </div>
    )
};

export default PostButton;