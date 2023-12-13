"use server";

import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Header from "@/app/ui/layout/logged-user/logger-user-desktop/header/header";
import { prisma } from "@/utils/lib/db/prisma";
import PostContent from "./components/post-content/post-content.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Feed from "./components/feed/feed.component";
import { IPost } from "@/app/interfaces/post";

async function Home() {
  const users = await prisma.user.findMany({ orderBy: { id: "desc" } }); // get all users from the database

  const session = await getServerSession(authOptions); // will get the session of the user logged

  const myUserId = session.user.id; // get the user id from the current session

  // const posts = await prisma.post.findMany({
  //   orderBy: { authorId: "desc" },
  //   include: { author: true }, // Include the author's information (id, name, image...)
  // });

  // UPDATE NEW POSTS
  const getPosts = async (): Promise<IPost[]> => {
    const posts = await prisma.post.findMany({
      orderBy: { authorId: "desc" },
      include: { author: true },
    });

    return posts;
  };
  const posts = await getPosts();

  // Criar uma função que gera esse map dentro de um utils que ficara dentro da pasta home
  // const mappedPosts = handleMapPosts(posts);
  // const mappedPosts = posts.map((e) => {
  //   return{
  //      ...e,
  //       e.AuthorId === sessionId ? author:true: author:false
  //    }
  // });

  // const refreshPosts = await getPosts();

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
        <PostContent myUserId={myUserId} />
        <Feed posts={posts} myUserId={myUserId} />
      </div>
    </LoaggedUser>
  );
}

export default Home;
