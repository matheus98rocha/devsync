import React from "react";

const PostField = (
    { handlePostModalVisibility }: { handlePostModalVisibility: (postModalVisibility: boolean) => void }
) => {
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

export default PostField;