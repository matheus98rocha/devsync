"use client";

import React from "react";
import Post from "@/app/ui/components/post/post.component";
import { handleDeletePost } from "../../service/delete-post.service";
import { AlertEnum } from "@/app/ui/components/alert/alert.types";
import Alert from "@/app/ui/components/alert/alert.component";
import { FeedProps } from "./feed.types";
import { handleAlertVisibility } from "@/utils/alert-visibility/alert-visibility";
import { ICurrentUserPost, IPost } from "@/app/interfaces/post";
import PostButton from "./components/post-button.component";
import PostModal from "@/app/ui/layout/post-modal/post-modal.component";

const Feed = ({ posts, myUserId }: FeedProps) => {
    const [text, setText] = React.useState<string>("");
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [showErrorAlert, setShowErrorAlert] = React.useState<boolean>(false);
    const [showPostModal, setShowPostModal] = React.useState<boolean>(false);
    const [showSuccessfulNewPostAlert, setShowSuccessfulNewPostAlert] = React.useState<boolean>(false);
    const [showSuccessfulDeletedPostAlert, setSuccessfulDeletedPostAlert] = React.useState<boolean>(false);
    const [showDeletePostModal, setShowDeletePostModal] = React.useState<boolean>(false);
    const [isLoadingDeletePost, setIsLoadingDeletePost] = React.useState<boolean>(false);

    const isMyPost: ICurrentUserPost[] = posts.map((post: IPost) => {
        return {
            id: post.id,
            text: post.text,
            image: post.author?.image || (null || ""), // use null if image is undefined
            name: post.author?.name || (null || ""),   // use null if name is undefined
            currentUserPost: post.authorId === myUserId ? true : false, // it will check if the user logged made the post
        };
    });

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

    const deletePost = async (id: string, isThatMyPost: boolean) => {
        if (isThatMyPost) {
            setIsLoadingDeletePost(true);
            await handleDeletePost(id);
            handleAlertVisibility(setSuccessfulDeletedPostAlert);
            setShowDeletePostModal(false)
            setIsLoadingDeletePost(false);
        };
    };

    const handleError = () => handleAlertVisibility(setShowErrorAlert);
    return (
        <>
            <PostButton buttonText="Começar uma publicação" handlePostModalVisibility={setShowPostModal} />
            {isMyPost.map((post: ICurrentUserPost, index: number) => (
                <div className="w-full" key={index}>
                    <Post
                        key={index}
                        text={post.text}
                        image={post.image}
                        name={post.name}
                        handleDeleteModal={() => setShowDeletePostModal(true)}
                        isMyPost={post.currentUserPost}

                        // delete post modal 
                        deleteModalMessage="Deletar uma publicação é uma ação irreversível!"
                        handleCancel={() => setShowDeletePostModal(false)}
                        handleDelete={() => deletePost(post.id, post.currentUserPost)}
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
                handleShowError={handleError}
            />
            <Alert showAlert={showSuccessfulNewPostAlert} message="SUA POSTAGEM ESTÁ NO AR" type={AlertEnum.SUCESS} />
            <Alert showAlert={showSuccessfulDeletedPostAlert} message="SUA POSTAGEM FOI REMOVIDA" type={AlertEnum.SUCESS} />
            <Alert showAlert={showErrorAlert} message="OCORREU UM ERROR AO PUBLICAR" type={AlertEnum.ERROR} />
        </>
    );
};

export default Feed;