"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

import * as Bi from "react-icons/bi";

function Post() {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div
      className="
      w-full
      h-auto
      border
     border-[#d0d0d0]
      border-opacity-50
      shadow-md
      rounded-lg
      flex
      items-center
      justify-center
      flex-col
      p-4
      gap-6
      animate-fade-up
      "
    >
      <div className="w-full flex items-center justify-items-start gap-4 my-2 border-b pb-5 border-[#d0d0d0]">
        {session?.user?.image && (
          <Image
            src={session.user.image as string}
            blurDataURL={session.user.image as string}
            width={30}
            height={30}
            priority={true}
            alt="use-profile"
            className="rounded-full"
          />
        )}
        <span className="text-sm font-medium">{session?.user?.name}</span>
      </div>
      <div className="w-full flex items-start justify-items-start">
        <p className="text-sm font-medium">
          Pessoal esse é o meu mais novo projeto, espero que gostem
        </p>
      </div>
      <Image
        src={
          "https://raw.githubusercontent.com/matheus98rocha/prime-flix/master/public/readme/home.png"
        }
        blurDataURL={
          "https://raw.githubusercontent.com/matheus98rocha/prime-flix/master/public/readme/home.png"
        }
        alt="post-image"
        placeholder="blur"
        width={1000}
        height={1000}
      />
      <div className="w-full flex items-center justify-around my-2 border-t pt-5 border-[#d0d0d0]">
        {isLiked ? (
          <Bi.BiSolidLike
            className="hover:cursor-pointer animate-jump text-primary"
            size={25}
            onClick={() => setIsLiked(false)}
          />
        ) : (
          <Bi.BiLike
            className="hover:cursor-pointer animate-jump"
            size={25}
            onClick={() => setIsLiked(true)}
          />
        )}
        <Bi.BiCommentAdd className="hover:cursor-pointer" size={25} />
        <Bi.BiShare className="hover:cursor-pointer" size={25} />
        <Bi.BiSend className="hover:cursor-pointer" size={25} />
      </div>
    </div>
  );
}

export default Post;