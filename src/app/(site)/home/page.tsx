import React from "react";

import ClientOnly from "@/app/ui/layout/logged-user/logged-user";
import Post from "@/app/ui/components/post/post.component";
import { prisma } from "@/utils/lib/db/prisma";
import Header from "@/app/ui/layout/logged-user/logger-user-desktop/header/header";

async function Home() {
    const users = await prisma.users.findMany({
      orderBy: {
        id: "desc",
      },
    });
    
  return (
    <ClientOnly>
      <Header usersData={users} />
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
