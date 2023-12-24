"use server"

import Post from "@/app/components/post/post.component";
import LoaggedUser from "@/app/layout/logged-user/logged-user";
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
        h-screen
        bg-background 
        gap-8
        scroll-smooth
        py-14
        sm:p-14
        sm:pb-36
        lg:w-3/6
      ">
        <Post />
      </div>
    </LoaggedUser>
  );
}

export default Home;