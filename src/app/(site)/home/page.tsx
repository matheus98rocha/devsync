"use server";

import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import Header from "@/app/ui/layout/logged-user/logger-user-desktop/header/header";
import { prisma } from "@/utils/lib/db/prisma";
import PostContent from "./components/post-content/post-content.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Feed from "./components/feed/feed.component";

interface User {
  id: string;
  name: string;
  image: string;
}

async function Home() {
  const users = await prisma.user.findMany({
    orderBy: {
      id: "desc",
    },
  });
  const session = await getServerSession(authOptions);

  const currentUserId = session.user.id;

  const posts = await prisma.post.findMany({
    orderBy: {
      authorId: "desc",
    },
  });

  const mappedPosts = posts.map((post) => {
    if (post.authorId === currentUserId) {
      return {
        ...post,
        isAuthor: true,
      };
    } else {
      return {
        ...post,
        isAuthor: false,
      };
    }
  });
  // Adaptar a base de dados para recuperar as imagens com o onUpdate: Cascade
  // Utilizar a lógica de isAuthor para identificar se o usuário pode ou não deletar um documento
  //Ajustar dropdown

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
        <PostContent authorId={currentUserId} />
        <Feed
          Posts={mappedPosts}
          users={users as User[]}
          myUserId={currentUserId}
        />
      </div>
    </LoaggedUser>
  );
}

export default Home;
