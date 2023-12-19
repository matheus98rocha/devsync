"use client";
import { IUser } from "@/app/interfaces/user";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SearchList({ users }: {users: IUser[]}) {
  return (
    <ul
      className={`
      absolute
      mt-2
      p-2
    bg-white
      rounded
      shadow
      w-64
      animate-fade-down
      cursor-pointer
      iphoneSE:w-48
      galaxyFold:w-32
      z-10
      `}
    >
      {users.map((user) => {
        return (
          <Link
            href={"/user/" + user.id}
            key={user.id}
            className="flex items-center justify-center gap-4 "
          >
            <p className="text-sm">{user.name}</p>
            <Image
              src={user.image || ""}
              height={30}
              width={30}
              alt={"user-search-image"}
              className="rounded"
            />
          </Link>
        );
      })}
    </ul>
  );
}

export default SearchList;
