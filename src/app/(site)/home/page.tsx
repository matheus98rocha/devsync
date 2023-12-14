"use server";

import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Header from "@/app/ui/layout/logged-user/logger-user-desktop/header/header";
import { prisma } from "@/utils/lib/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Feed from "./components/feed/feed.component";
import { handleMapPosts } from "./utils/mapped-posts";

async function Home() {
  const users = await prisma.user.findMany({ orderBy: { id: "desc" } }); // get all users from the database

  const session = await getServerSession(authOptions); // will get the session of the user logged

  const { id, name, image } = session.user;

  const posts = await prisma.post.findMany({
    orderBy: { authorId: "desc" },
    select: { id: true, text: true, name: true, image: true, authorId: true },
  });

  const mappedPosts = handleMapPosts(posts, id);
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
        <Feed posts={mappedPosts} myUserId={id} image={image} name={name} />
      </div>
    </LoaggedUser>
  );
};

export default Home;