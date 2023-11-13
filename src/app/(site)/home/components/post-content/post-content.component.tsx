"use client"

import React from "react";
import PostField from "../post-field/post-field.component";
import PostModal from "@/app/ui/layout/post-modal/post-modal.component";
import { useElementsContext } from "@/context/elements.context";

const PostContent = ({ publish }: { publish: any }) => {
    const { text, handleText } = useElementsContext();
    const [showPostModal, setShowPostModal] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) setSelectedFile(files[0]);
    };

    const handleResetModal = () => {
        setShowPostModal(false);
        setSelectedFile(null);
        handleText({ target: { value: "" } } as React.ChangeEvent<HTMLTextAreaElement>);
    };
    return (
        <>
            <PostModal
                canShowPostModal={showPostModal}
                handleCloseModal={handleResetModal}
                text={text}
                handleText={handleText}
                handleFileChange={handleFileChange}
                selectedFile={selectedFile}
                handleSelectedFile={setSelectedFile}
                characterLimit={300}
                publish={() => {
                    handleResetModal();
                    publish;
                }}
            />
            <PostField handlePostModalVisibility={setShowPostModal} />
        </>
    )
};

export default PostContent;