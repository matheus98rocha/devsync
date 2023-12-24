import React from "react";
import { IUserContentSidebar } from "./user-content-sidebar.interface";
import Image from "next/image";

function UserContentSidebar({
  canShowData,
  isOpenSidebar,
  userName,
  userImagem,
}: IUserContentSidebar) {
  return (
    <div className="flex items-center justify-start flex-col gap-4">
      {canShowData && (
        <Image
          src={userImagem}
          blurDataURL={userImagem}
          width={isOpenSidebar ? 60 : 30}
          height={isOpenSidebar ? 60 : 30}
          priority={true}
          alt="use-profile"
          className="rounded-full"
        />
      )}
      {isOpenSidebar && (
        <p className="font-semibold animate-fade animate-duration-[3ms] break-all">
          {userName}
        </p>
      )}
    </div>
  );
}

export default UserContentSidebar;
