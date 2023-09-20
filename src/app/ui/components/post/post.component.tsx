"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

import Interactions from "./components/interactions/interactions.component";

function Post() {
  const { data: session } = useSession();
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
      <div className="relative w-full h-96">
        <Image
          src={
            "https://raw.githubusercontent.com/matheus98rocha/prime-flix/master/public/readme/home.png"
          }
          blurDataURL={
            "https://raw.githubusercontent.com/matheus98rocha/prime-flix/master/public/readme/home.png"
          }
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="post-image"
          placeholder="blur"
        />
      </div>
      <Interactions />
    </div>
  );
}

export default Post;
