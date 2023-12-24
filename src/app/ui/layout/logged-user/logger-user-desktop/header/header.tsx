"use client";
import React from "react";
import { useElementsContext } from "@/context/elements.context";
import SearchInput from "@/app/ui/components/search-input/search-input.component";
import Image from "next/image";
import iconApplication from "../../../../../../../public/apple-touch-icon.svg";
import Link from "next/link";
import { IHeaderProps } from "./header.types";
import { useSession } from "next-auth/react";

function Header({ isOnMobile, usersData, handleShowLogoutModal }: IHeaderProps) {
  const { data: session } = useSession();
  const { isOpenDropdownMenuMobile, toggleIsOpenDropdownMenuMobile } = useElementsContext();
  const { isOpenSidebar } = useElementsContext();
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div
      className={`
        h-10 
        ${isOpenSidebar ? "w-3/6" : "w-full"}
        bg-background 
        mb-1
        flex
        items-center
        justify-between
        ease-out duration-75
        py-8
        shadow-md
        px-10
        md:px-4
  `}>
      <SearchInput
        searchValue={searchValue}
        onChangeSearch={(event) => setSearchValue(event.target.value)}
        handleResetSearchBar={() => setSearchValue("")}
        usersData={usersData}
      />
      {
        isOnMobile ?
          session?.user?.image && (
            <div className="relative">
              <Image
                src={session.user.image as string}
                blurDataURL={session.user.image as string}
                placeholder="blur"
                width={40}
                height={40}
                priority={true}
                alt="use-profile"
                className="rounded-full cursor-pointer"
                onClick={() => toggleIsOpenDropdownMenuMobile()}
              />
              {isOpenDropdownMenuMobile && (
                <div className="absolute top-10 right-1 p-2 bg-contrastBackground shadow-lg">
                  <p onClick={() => handleShowLogoutModal(true)}>Sair</p>
                </div>
              )}
            </div>
          )
          :
          <Link href="/home">
            <Image src={iconApplication} height={40} width={40} alt="principal-icon" />
          </Link>
      }
    </div>
  );
}

export default Header;