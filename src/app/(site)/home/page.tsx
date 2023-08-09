"use client";
import React from "react";

import ClientOnly from "@/app/ui/layout/logged-user/logged-user";
import Post from "@/app/ui/components/post/post.component";

function Home() {
  const [isExpandedSideMenu, setIsExpandedSideMenu] = React.useState(false);

  return (
    <ClientOnly>
      <div
        className="
      w-3/6
      h-screen
      overflow-y-scroll
      overflow-x-hidden
      lg:shadow-md
      lg:bg-background
      flex
      flex-col
      items-center
      justify-start
      px-10
      gap-7
      "
      >
        <Post />
        <Post />
        <Post />
      </div>
    </ClientOnly>
  );
}

export default Home;
