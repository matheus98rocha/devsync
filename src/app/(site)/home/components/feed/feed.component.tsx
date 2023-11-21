"use client"

import React from "react";
import Post from "@/app/ui/components/post/post.component";

const Feed = ({ authorPost,  }: { authorPost: any }) => {
    const [posts, setPosts] = React.useState<string[]>([]);

  const showPosts = authorPost.map((post: { text: string }) => post.text);

    React.useEffect(() => {
        setPosts(showPosts)
    }, []);

    return (
        <>
            {posts.map((text: string, index: number) => (
                <Post key={index} text={text} />
            ))}
        </>
    );
};

export default Feed;