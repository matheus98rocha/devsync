"use client"

import React from "react";
import Post from "@/app/ui/components/post/post.component";
import { handleDeletePost } from "../../service/delete-post.service";
import DeleteModal from "@/app/ui/layout/delete-modal/delete-modal.component";
import { AlertEnum } from "@/app/ui/components/alert/alert.types";
import Alert from "@/app/ui/components/alert/alert.component";
import { FeedProps } from "./feed.types";
import { handleAlertVisibility } from "@/utils/alert-visibility/alert-visibility";

const Feed = ({ Posts, users, myUserId }: FeedProps) => {
    const [showSucessfulAlert, setShowSucessfulAlert] = React.useState<boolean>(false);
    const [showDeletePostModal, setShowDeletePostModal] = React.useState<boolean>(false);

    const posts = React.useMemo(() => Posts.map((post) => {
        const foundUser = users.find((user) => user.id === post.authorId);
        return {
            id: post.id,
            text: post.text,
            name: foundUser ? foundUser.name : "",
            image: foundUser ? foundUser.image : "",
            isCurrentSession: post.authorId === myUserId,
        };
    }), [Posts, users, myUserId]);

    const DeletePost = async (id: string) => {
        await handleDeletePost(id);
        handleAlertVisibility(setShowSucessfulAlert)
        setShowDeletePostModal(false);
    };
    return (
        <>
            {posts.map((post: any, index: number) => (
                <div className="w-full" key={index}>
                    <Post
                        key={index}
                        text={post.text}
                        image={post.image}
                        name={post.name}
                        amIThePostOwner={post.isCurrentSession && myUserId}
                        handleDeleteModal={() => setShowDeletePostModal(true)}
                    />
                    {showDeletePostModal &&
                        <DeleteModal
                            key={index}
                            handleCancel={() => setShowDeletePostModal(false)}
                            handleDelete={() => DeletePost(post.id)}
                            showDeleteModal={showDeletePostModal}
                            message="Deletar uma publicação é uma ação é irreversível!"
                        />
                    }
                </div>
            ))}
            {showSucessfulAlert && <Alert showAlert={showSucessfulAlert} message="SUA PUBLICAÇÃO FOI REMOVIDA!" type={AlertEnum.SUCESS} />}
        </>
    );
};

export default Feed;