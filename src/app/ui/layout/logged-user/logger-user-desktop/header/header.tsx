"use client";
import React from "react";
import * as Io from "react-icons/io";
import * as Bi from "react-icons/bi";
import { useElementsContext } from "@/context/elements.context";
import SearchInput from "@/app/ui/components/search-input/search-input.component";

function Header() {
  const { isOpenSidebar } = useElementsContext();

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
