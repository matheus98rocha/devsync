"use client"
import React from 'react';
import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Post from "@/app/ui/components/post/post.component";
import Header from "@/app/ui/layout/logged-user/logger-user-desktop/header/header";
import PostCreation from "./components/post-creation/post-creation.component";
import { prismaService } from './utils/prisma-service';

interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
};

async function Home() {
  const [postText, setPostText] = React.useState("");
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    const getUserData = async () => {
      const usersData = await prismaService.users();
      setUsers(usersData);
    };
    getUserData();
  }, []);

  const publish = async () => {
    await prismaService.publish(postText);
  };
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
        <PostCreation
          postText={postText} handleTextPost={setPostText}
          publish={publish}
        />
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