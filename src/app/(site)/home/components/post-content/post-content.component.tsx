"use client"

import React from "react";
import PostField from "../post-field/post-field.component";
import PostModal from "@/app/ui/layout/post-modal/post-modal.component";
import SucessfulAlert from "@/app/ui/components/alert/sucess/sucessful-alert.component";
import ErrorAlert from "@/app/ui/components/alert/error/error-alert.component";
import { handleAlertVisibility } from "@/utils/alert-visibility/alert-visibility";

const PostContent = ({ authorId }: { authorId: string }) => {
    const [text, setText] = React.useState<string>("");
    const [showSucessfulAlert, setShowSucessfulAlert] = React.useState<boolean>(false);
    const [showErrorAlert, setShowErrorAlert] = React.useState<boolean>(false);
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

    const handleSubmitPost = () => {
        handleResetModal();
        return handleAlertVisibility(setShowSucessfulAlert);
    };

    const handleError = () => handleAlertVisibility(setShowErrorAlert);
    return (
        <>
            <PostModal
                canShowPostModal={showPostModal}
                handleCloseModal={handleResetModal}
                handleSubmitPost={handleSubmitPost}
                handleFileChange={handleFileChange}
                handleSelectedFile={setSelectedFile}
                selectedFile={selectedFile}
                handleText={setText}
                text={text}
                authorId={authorId}
                handleShowError={handleError}
            />
            <ErrorAlert showAlert={showErrorAlert} message="ERROR AO PUBLICAR" />
            <SucessfulAlert showAlert={showSucessfulAlert} message="ENVIADO COM SUCESSO" />
            <PostField handlePostModalVisibility={setShowPostModal} />
        </>
    )
};

export default PostContent;