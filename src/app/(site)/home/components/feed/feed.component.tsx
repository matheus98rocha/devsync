"use client"

import React from "react";
import Post from "@/app/ui/components/post/post.component";

const Feed = ({ authorPost, users }:
    {
        authorPost: Array<{ authorId: string; text: string }>,
        users: Array<{ id: string; name: string; image: string }>
    }) => {
    const [posts, setPosts] = React.useState<{ text: string; name: string; image: string }[]>([]);
    React.useEffect(() => {
        const findAllPosts = authorPost.map((post) => {
            const user = users.find((user) => user.id === post.authorId);
            return {
                text: post.text,
                name: user ? user.name : "",
                image: user ? user.image : "",
            };
        });

        setPosts(findAllPosts);
    }, [authorPost, users]);

    return (
        <>
            {posts.map((post: any, index: number) => (
                <Post key={index} text={post.text} image={post.image} name={post.name} />
            ))}
        </>
    );
};

export default Feed;