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
import { IUser } from "@/app/interfaces/user";

interface HeaderProps {
  usersData: any[];
}

function Header({ usersData }: HeaderProps) {
  const { isOpenSidebar } = useElementsContext();
  const pathname = usePathname();

  React.useEffect(() => {
    console.log(usersData);
  }, [usersData]);

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
        handleResetSearchBar={() => setSearchValue("")}
        usersData={usersData}
      />
      {pathname === "/home" ? (
        // In here when click happens you refresh the database data
        <Image
          src={iconApplication}
          height={40}
          width={40}
          alt={"principal-icon"}
        />
      ) : (
        <Link href={"/home"}>
          <Image
            src={iconApplication}
            height={40}
            width={40}
            alt={"principal-icon"}
          />
        </Link>
      )}

      {/* Wrapper icons */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-1 flex-col hover:cursor-pointer">
          <Bi.BiMessageSquareDots size={25} />
          <span className="text-xs">Mensagens</span>
        </div>
        <div className="flex items-center justify-center gap-2 flex-col hover:cursor-pointer">
          <Io.IoMdNotificationsOutline size={25} />
          <span className="text-xs">Notificações</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
