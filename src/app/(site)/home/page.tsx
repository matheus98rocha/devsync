"use client";
import React from "react";

import ClientOnly from "@/app/ui/layout/logged-user/logged-user";
import Post from "@/app/ui/components/post/post.component";
import Replies from "@/app/ui/components/replies/replies.component";

function Home() {
  const [showReplies, setShowReplies] = React.useState(false);
  return (
    <ClientOnly>
      <div
        className="
        flex 
        flex-col
        items-start
        justify-start
        shadow-md
        overflow-scroll
        overflow-x-hidden
        w-screen
        lg:w-3/6
        h-screen
        bg-background 
        p-10
        gap-8
        scroll-smooth
      "
      >
        <Replies showReplies={showReplies} handleShowReplies={setShowReplies} />
        <Post handleShowReplies={setShowReplies} />
        <Post handleShowReplies={setShowReplies} />
        <Post handleShowReplies={setShowReplies} />
        <Post handleShowReplies={setShowReplies} />
        <Post handleShowReplies={setShowReplies} />
        <Post handleShowReplies={setShowReplies} />
      </div>
    </ClientOnly>
  );
}

export default Home;
