"use client";

import React from "react";
import Post from "@/app/ui/components/post/post.component";
import { handleDeletePost } from "../../service/delete-post.service";
import { AlertEnum } from "@/app/ui/components/alert/alert.types";
import Alert from "@/app/ui/components/alert/alert.component";
import { FeedProps } from "./feed.types";
import { handleAlertVisibility } from "@/utils/alert-visibility/alert-visibility";
import PostButton from "./components/post-button.component";
import PostModal from "@/app/ui/layout/post-modal/post-modal.component";
import { ICurrentUserPost, IPost } from "@/app/interfaces/post";

const Feed = ({ name, image, posts, myUserId }: FeedProps) => {
    const [text, setText] = React.useState<string>("");
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [showErrorAlert, setShowErrorAlert] = React.useState<boolean>(false);
    const [showPostModal, setShowPostModal] = React.useState<boolean>(false);
    const [showSuccessfulNewPostAlert, setShowSuccessfulNewPostAlert] = React.useState<boolean>(false);
    const [showSuccessfulDeletedPostAlert, setSuccessfulDeletedPostAlert] = React.useState<boolean>(false);
    const [showDeletePostModal, setShowDeletePostModal] = React.useState<boolean>(false);
    const [isLoadingDeletePost, setIsLoadingDeletePost] = React.useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) setSelectedFile(files[0]);
    };

    const handleResetModal = () => {
        setSelectedFile(null);
        setText("");
        setShowPostModal(false);
    };

    const handleSubmitPost = async () => {
        handleResetModal();
        handleAlertVisibility(setShowSuccessfulNewPostAlert);
    };

    const deletePost = async (id: string) => {
        setIsLoadingDeletePost(true);
        await handleDeletePost(id);
        handleAlertVisibility(setSuccessfulDeletedPostAlert);
        setShowDeletePostModal(false)
        setIsLoadingDeletePost(false);
    };
    const handleError = () => handleAlertVisibility(setShowErrorAlert);
    return (
        <>
            <PostButton buttonText="Começar uma publicação" handlePostModalVisibility={setShowPostModal} />
            {posts.map((post: any) => (
                    <div className="w-full" key={post.id}>
                        <Post
                            text={post.text}
                            image={post.image}
                            name={post.name}
                            handleDeleteModal={() => setShowDeletePostModal(true)}
                            isMyPost={post.currentUserPost}

                            // delete post modal 
                            deleteModalMessage="Deletar uma publicação é uma ação irreversível!"
                            handleCancel={() => setShowDeletePostModal(false)}
                            handleDelete={() => deletePost(post.id)}
                            showDeleteModal={showDeletePostModal}
                            isLoadingDeletePost={isLoadingDeletePost}
                        />
                    </div>
                )
            )}
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
                name={name}
                image={image}
                handleShowError={handleError}
            />
            <Alert showAlert={showSuccessfulNewPostAlert} message="SUA POSTAGEM ESTÁ NO AR" type={AlertEnum.SUCESS} />
            <Alert showAlert={showSuccessfulDeletedPostAlert} message="SUA POSTAGEM FOI REMOVIDA" type={AlertEnum.SUCESS} />
            <Alert showAlert={showErrorAlert} message="OCORREU UM ERROR AO PUBLICAR" type={AlertEnum.ERROR} />
        </>
    );
};

export default Feed;