"use server";

import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Header from "@/app/ui/layout/logged-user/logger-user-desktop/header/header";
import { prisma } from "@/utils/lib/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Feed from "./components/feed/feed.component";
import { IPost } from "@/app/interfaces/post";
import { handleMapPosts } from "./utils/mapped-posts";

async function Home() {
  const users = await prisma.user.findMany({ orderBy: { id: "desc" } }); // get all users from the database

  const session = await getServerSession(authOptions); // will get the session of the user logged

  const myUserId = session.user.id; // get the user id from the current session

  const posts = await prisma.post.findMany({
    orderBy: { authorId: "desc" },
    include: { author: true }, // Include the author's information (id, name, image...)
  });

  const mappedPosts = handleMapPosts(posts, myUserId);

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
        <Feed posts={mappedPosts} myUserId={myUserId} />
      </div>
    </LoaggedUser>
  );
}

export default Home;