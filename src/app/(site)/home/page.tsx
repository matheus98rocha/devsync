"use client";
import React from "react";

import ClientOnly from "@/app/ui/layout/logged-user/logged-user";
import Post from "@/app/ui/components/post/post.component";

function Home() {
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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </ClientOnly>
  );
}

export default Home;
