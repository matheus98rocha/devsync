"use server";

import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Post from "@/app/ui/components/post/post.component";
import Header from "@/app/ui/layout/logged-user/logger-user-desktop/header/header";
import { prisma } from "@/utils/lib/db/prisma";
import PostContent from "./components/post-content/post-content.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Home() {
  const users = await prisma.user.findMany({
    orderBy: {
      id: "desc",
    },
  });
  const session = await getServerSession(authOptions);
  console.log("Id User", session.user.id);
  return (
    <LoaggedUser currentPage="home">
      <Header usersData={[...users]} />
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
        <PostContent />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </LoaggedUser>
  );
}

export default Home;
