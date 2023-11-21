"use server";

import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Header from "@/app/ui/layout/logged-user/logger-user-desktop/header/header";
import { prisma } from "@/utils/lib/db/prisma";
import PostContent from "./components/post-content/post-content.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Feed from "./components/feed/feed.component";

async function Home() {
  const users = await prisma.user.findMany({
    orderBy: {
      id: "desc",
    },
  });
  const session = await getServerSession(authOptions);
  
  const authorId = session.user.id;

  const posts = await prisma.post.findMany({
    orderBy: {
      authorId: "desc"
    }
  });
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
        <PostContent authorId={authorId} />
        <Feed authorPost={posts} />
      </div>
    </LoaggedUser>
  );
}

export default Home;