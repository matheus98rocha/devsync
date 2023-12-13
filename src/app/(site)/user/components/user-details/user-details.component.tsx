"use client";
import Image from "next/image";
import React from "react";
import { IUserDetails } from "./user-details.type";
import { useElementsContext } from "@/context/elements.context";

function UserDetails({ image, name }: IUserDetails) {
  const { isOpenSidebar } = useElementsContext();
  return (
    <div
      className={`flex items-center justify-center gap-4 absolute top-60 ${
        !isOpenSidebar ? "left-36" : "left-80"
      } z-20`}
    >
      <div className="flex items-center justify-center rounded-full bg-white shadow h-40 w-40">
        <Image
          src={image as string}
          alt="user-details-image"
          width={150}
          height={150}
          className="rounded-full shadow-sm"
        />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default UserDetails;
