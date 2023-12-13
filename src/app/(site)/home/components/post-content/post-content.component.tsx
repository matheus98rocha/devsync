"use client"

import React from "react";
import PostButton from "../post-button/post-button.component";
import PostModal from "@/app/ui/layout/post-modal/post-modal.component";
import { handleAlertVisibility } from "@/utils/alert-visibility/alert-visibility";
import Alert from "@/app/ui/components/alert/alert.component";
import { AlertEnum } from "@/app/ui/components/alert/alert.types";
import { IPostContentProps } from "./post-content.types";

const PostContent = ({ myUserId }: IPostContentProps) => {
    const [text, setText] = React.useState<string>("");
    const [showSucessfulAlert, setShowSucessfulAlert] = React.useState<boolean>(false);
    const [showErrorAlert, setShowErrorAlert] = React.useState<boolean>(false);
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [showPostModal, setShowPostModal] = React.useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) setSelectedFile(files[0]);
    };
    
    const handleResetModal = () => {
        setSelectedFile(null);
        setText("");
        setShowPostModal(false);
    };

    const handleSubmitPost = async() => {
        handleResetModal();
        handleAlertVisibility(setShowSucessfulAlert);
        // FUNÇÃO PARA ATUALIZAR OS POSTS
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
                myUserId={myUserId}
                handleShowError={handleError}
            />
            <Alert showAlert={showSucessfulAlert} message="SUA POSTAGEM ESTÁ NO AR!" type={AlertEnum.SUCESS} />
            <Alert showAlert={showErrorAlert} message="OCORREU UM ERROR AO PUBLICAR" type={AlertEnum.ERROR} />
            <PostButton handlePostModalVisibility={setShowPostModal} />
        </>
    )
};

export default PostContent;