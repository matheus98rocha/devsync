import React from "react";
import { MenuHamburguerProps } from "./hamburguer-menu-types";

function HamburguerMenu({ isOpen, setIsOpen }: MenuHamburguerProps) {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-gray transition ease transform duration-300`;
  return (
    <button
      className="flex flex-col justify-center items-center h-12 w-12 border-2 border-none rounded group"
      onClick={setIsOpen}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}

export default HamburguerMenu;
