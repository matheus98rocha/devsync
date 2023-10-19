"use client";
import React from "react";
import * as Io from "react-icons/io";
import * as Bi from "react-icons/bi";
import { useElementsContext } from "@/context/elements.context";
import SearchInput from "@/app/ui/components/search-input/search-input.component";
import Image from "next/image";
import { usePathname } from "next/navigation";

import iconApplication from "../../../../../../../public/apple-touch-icon.svg";
import Link from "next/link";

function Header() {
  const { isOpenSidebar } = useElementsContext();
  const pathname = usePathname();

  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div
      className={`
    h-10 
    ${isOpenSidebar ? "w-3/6" : "w-[89%]"}
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
      />
      {pathname === "/home" ? (
        <Image src={iconApplication} height={40} width={40} alt="principal-icon" />
      ) : (
        <Link href="/home">
          <Image src={iconApplication} height={40} width={40} alt="principal-icon" />
        </Link>
      )}
    </div>
  );
}

export default Header;