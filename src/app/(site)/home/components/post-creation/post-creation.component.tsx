"use client"
import React from "react";
import PostField from "../post-field/post-field.component";
import PostModal from "@/app/ui/layout/post-modal/post-modal.component";

const PostCreation = () => {
    const [showPostModal, setShowPostModal] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [text, setText] = React.useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) setSelectedFile(files[0]);
    };
    return (
        <>
            <PostModal
                canShowPostModal={showPostModal}
                handleCloseModal={() => {
                    setShowPostModal(false);
                    setSelectedFile(null);
                    setText("");
                }}
                text={text}
                handleText={setText}
                handleFileChange={handleFileChange}
                selectedFile={selectedFile}
                handleSelectedFile={setSelectedFile}
                characterLimit={300}
            />
            <PostField handlePostModalVisibility={setShowPostModal} />
        </>
    )
};

export default PostCreation;