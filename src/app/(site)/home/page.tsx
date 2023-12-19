"use server"

import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Post from "@/app/ui/components/post/post.component";
import { prisma } from "@/utils/lib/db/prisma";

async function Home() {
  const users = await prisma.user.findMany({
    orderBy: {
      id: "desc",
    },
  });
  console.log(users);
  return (
    <LoaggedUser currentPage="home" usersData={[...users]}>
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
    </LoaggedUser>
  );
}

export default Home;
