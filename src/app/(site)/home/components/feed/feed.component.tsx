"use client";

import React from "react";
import Post from "@/app/ui/components/post/post.component";
import { handleDeletePost } from "../../service/delete-post.service";
import { AlertEnum } from "@/app/ui/components/alert/alert.types";
import Alert from "@/app/ui/components/alert/alert.component";
import { FeedProps } from "./feed.types";
import { handleAlertVisibility } from "@/utils/alert-visibility/alert-visibility";
import { ICurrentUserPost, IPost } from "@/app/interfaces/post";

const Feed = ({ posts, myUserId }: FeedProps) => {
    const [showSucessfulAlert, setShowSucessfulAlert] = React.useState<boolean>(false);
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
    const deletePost = async (id: string, isThatMyPost: boolean) => {
        if (isThatMyPost) {
            setIsLoadingDeletePost(true);
            await handleDeletePost(id);
            handleAlertVisibility(setShowSucessfulAlert);
            setShowDeletePostModal(false);
            setIsLoadingDeletePost(false);
        };
    };
    return (
        <>
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
            {<Alert showAlert={showSucessfulAlert} message="SUA PUBLICAÇÃO FOI REMOVIDA!" type={AlertEnum.SUCESS} />}
        </>
    );
};

export default Feed;
