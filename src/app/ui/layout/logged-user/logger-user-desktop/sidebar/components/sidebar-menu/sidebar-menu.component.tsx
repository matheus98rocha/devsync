"use client";
import React from "react";
import { ISidebarMenu } from "./sidebar-menu.interface";

function SidebarMenu({ isOpenMenu, isOpenSidebar }: ISidebarMenu) {
  return (
    <>
      {isOpenMenu ? (
        <div
          className={`bg-background
    h-32
    w-28
    flex
    items-center
    justify-center
    flex-col
    absolute
    ${isOpenSidebar ? "left-72" : "left-28"}
    top-2
    shadow-2xl
    animate-jump-in
    `}
        >
          {/* Main contente modal sidebar menu */}
          <div
            className="border-b
          border-contrastBackground
          pb-3
          flex
          flex-col
          items-center
          justify-center
          gap-3"
          >
            <p
              className="text-sm hover:cursor-pointer"
              onClick={() => alert("in development")}
            >
              Meu perfil
            </p>
            <p className="text-sm hover:cursor-pointer">Sobre</p>
          </div>
          <div className="pt-2">
            <p className="text-sm hover:cursor-pointer">Sair</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SidebarMenu;
