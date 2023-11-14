"use client"

import React from "react";
import PostField from "../post-field/post-field.component";
import PostModal from "@/app/ui/layout/post-modal/post-modal.component";

const PostContent = () => {
    const [text, setText] = React.useState<string>("");
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [showPostModal, setShowPostModal] = React.useState(false);
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) setSelectedFile(files[0]);
    };
    const handleResetModal = () => {
        setSelectedFile(null);
        setText("");
        setShowPostModal(false);
    };
    return (
        <>
            <PostModal
                canShowPostModal={showPostModal}
                handleCloseModal={handleResetModal}
                handleFileChange={handleFileChange}
                handleSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
                handleText={setText}
                text={text}
            />
            <PostField handlePostModalVisibility={setShowPostModal} />
        </>
    )
};

export default PostContent;