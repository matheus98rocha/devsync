"use client"

import React from "react";
import Post from "@/app/ui/components/post/post.component";
import { handleDeletePost } from "../../service/delete-post.service";
import DeleteModal from "@/app/ui/layout/delete-modal/delete-modal.component";
import SucessfulAlert from "@/app/ui/components/alert/sucess/sucessful-alert.component";

const Feed = ({ authorPost, users, authorId }:
    {
        authorPost: Array<{
            id: string; authorId: string; text: string
        }>,
        users: Array<{ id: string; name: string; image: string }>,
        authorId: string,
    }) => {
    const [posts, setPosts] = React.useState<{ id: string, text: string; name: string; image: string }[]>([]);
    const [deletePostModal, setDeletePostModal] = React.useState<boolean>(false);
    const [sucessFulAlert, setSucessFulAlert] = React.useState<boolean>(false);
    React.useEffect(() => {
        const findAllPosts = authorPost.map((post) => {
            const user = users.find((user) => user.id === post.authorId);
            return {
                id: post.id,
                text: post.text,
                name: user ? user.name : "",
                image: user ? user.image : "",
                isCurrentSession: post.authorId === authorId,
            };
        });
        setPosts(findAllPosts);
    }, [authorPost, users]);

    const DeletePost = (id: string) => {
        handleDeletePost(id);
        setDeletePostModal(false);
        setSucessFulAlert(true);
        setTimeout(() => { window.location.reload() }, 2000);
    };
    return (
        <>
            <SucessfulAlert message="Publicação removida com sucesso!" showAlert={sucessFulAlert} />
            {
                posts.map((post, index) => (
                    <DeleteModal
                        key={index}
                        handleCancel={() => setDeletePostModal(false)}
                        handleDelete={() => DeletePost(post.id)}
                        showDeleteModal={deletePostModal}
                        message="Deletar uma publicação é uma ação é irreversível!"
                    />
                ))
            }
            {posts.map((post: any, index: number) => (
                <Post
                    key={index}
                    text={post.text}
                    image={post.image}
                    name={post.name}
                    authorId={post.isCurrentSession && authorId}
                    handleDeleteModal={setDeletePostModal}
                />
            ))}
        </>
    );
};

export default Feed;