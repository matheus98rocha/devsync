"use client";
import React from "react";
import { useElementsContext } from "@/context/elements.context";
import SearchInput from "@/app/ui/components/search-input/search-input.component";
import Image from "next/image";
import { usePathname } from "next/navigation";

import iconApplication from "../../../../../../../public/apple-touch-icon.svg";
import Link from "next/link";
import { IHeaderProps } from "./header.types";

function Header({ usersData}: IHeaderProps) {
  const { isOpenSidebar } = useElementsContext();
  const pathname = usePathname();

  React.useEffect(() => {
    console.log(usersData);
  }, [usersData]);

  const [searchValue, setSearchValue] = React.useState("");

  console.log(pathname)
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
        px-4
        py-8
        shadow-md
  `}
    >
      <SearchInput
        searchValue={searchValue}
        onChangeSearch={(event) => setSearchValue(event.target.value)}
        handleResetSearchBar={() => setSearchValue("")}
        usersData={usersData}
      />
      {pathname === "/home" ?
        <Image src={iconApplication} height={40} width={40} alt="principal-icon" />
        :
        <Link href="/home">
          <Image src={iconApplication} height={40} width={40} alt="principal-icon" />
        </Link>
      }
    </div>
  );
}

export default Header;