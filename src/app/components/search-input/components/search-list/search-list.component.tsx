"use client";
import { IUser } from "@/app/interfaces/user";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SearchList({ users }: { users: IUser[] }) {
  return (
    <ul
      className={`
      flex
      flex-col
      gap-4
      absolute
      mt-2
      p-2
    bg-white
      rounded
      shadow
      w-32 sm:w-64
      animate-fade-down
      cursor-pointer
      iphoneSE:w-48
      galaxyFold:w-32
      z-10
      `}
    >
      {users.map((user) => (
        <Link
          href={"/user/" + user.id}
          key={user.id}
          className="flex items-center justify-center gap-4 flex-row">
          <p className="text-sm">{user.name}</p>
          <Image
            src={user.image || ""}
            height={30}
            width={30}
            alt={"user-search-image"}
            className="rounded"
          />
        </Link>
      )
      )}
    </ul>
  );
};

export default SearchList;