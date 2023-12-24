"use client";
import React, { memo } from "react";
import { useSession } from "next-auth/react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { ImExit } from "react-icons/im";

import SidebarItem from "./components/sidebar-item/sidebar-item.component";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { SidebarProps } from "./sidebar.types";
import packageJson from "../../../../../package.json";
import { useElementsContext } from "@/context/elements.context";
import UserContentSidebar from "./components/user-content-sidebar/user-content-sidebar.component";
import SidebarMobileItem from "./components/sidebar-mobile/sidebar-mobile-item";

function Sidebar({ isOnMobile, handleShowLogout }: SidebarProps) {
  const [canShowUserData, setCanShowUserData] = React.useState<boolean>(false);
  const { data: session } = useSession();
  const appVersion = packageJson.version || "N/A";
  const { isOpenSidebar, toggleIsOpenSidebar } = useElementsContext();

  React.useEffect(() => {
    if (session?.user?.image) {
      setCanShowUserData(true);
    }
  }, [session?.user?.image]);
  return (
    <>
      {
        isOnMobile ?
          <div
            className="bg-background
          shadow-lg
          absolute
          bottom-0
          w-screen
          py-4
          flex
          items-center
          justify-around
          gap-4
          z-50
          "
          >
            {routes.map((route) => (
              <Link href={route.route} key={route.route}>
                <SidebarMobileItem
                  icon={route.icon}
                  label={route.label}
                  currentRoute={route.route}
                />
              </Link>
            ))}
          </div>
          :
          <>
            <div
              className={`
        relative
        left-0
        grid
        grid-cols-1
        grid-rows-[300px_auto_100px]
        h-screen 
        py-2
        ${isOpenSidebar ? "w-64" : "w-24"}
        duration-75
        bg-background
        dark:bg-black
        shadow-md
        `}
            >
              {/* User container   */}
              <UserContentSidebar
                canShowData={canShowUserData}
                isOpenSidebar={isOpenSidebar}
                userImagem={session?.user?.image as string}
                userName={session?.user?.name as string}
              />

              {/* Main Container  */}
              <div className="flex flex-col items-center justify-start gap-4 pt-6">
                {routes.map((route) => (
                  <Link href={route.route} key={route.route} className="w-full">
                    <SidebarItem
                      icon={route.icon}
                      isExpanded={isOpenSidebar}
                      label={route.label}
                      currentRoute={route.route}
                    />
                  </Link>
                ))}
              </div>

              {/* Footer container  */}
              <div className="flex flex-col items-center justify-center gap-4 pb-6">
                <div className="w-full flex items-center justify-center"></div>
                <div
                  className="hover:cursor-pointer flex items-center justify-center gap-2"
                  onClick={() => () => toggleIsOpenSidebar()}
                >
                  <AiOutlineArrowRight
                    className={`${isOpenSidebar ? "rotate-180" : "rotate-0"
                      }       duration-300`}
                    size={23}
                    onClick={() => toggleIsOpenSidebar()}
                  />
                  {isOpenSidebar && (
                    <p className="slit-in-horizontal font-semibold">Comprimir</p>
                  )}
                </div>
                <SidebarItem
                  handleClick={() => handleShowLogout(true)}
                  icon={ImExit}
                  isExpanded={isOpenSidebar}
                  efectHoverItem={false}
                  label={"Sair"}
                />
              </div>

            </div>
            <p className="fixed bottom-0 left-2 text-primary text-xs">
              Versão: {appVersion}
            </p>
          </>
      }
    </>
  );
}

export default memo(Sidebar);