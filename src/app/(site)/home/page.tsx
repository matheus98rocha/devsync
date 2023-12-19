"use server"

import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Post from "@/app/ui/components/post/post.component";
import { findAllUsers } from "@/services/prisma.services";

async function Home() {
  const users = await findAllUsers();
  return (
    <LoaggedUser currentPage="home" usersData={users}>
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
        gap-8
        scroll-smooth
        py-14
        sm:p-14
      "
      >
        <Post />
      </div>
    </LoaggedUser>
  );
}

export default Home;