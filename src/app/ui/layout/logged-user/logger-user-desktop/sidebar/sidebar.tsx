"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiOutlineHome,
} from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { MdPersonalVideo } from "react-icons/md";
import { SiHtmlacademy } from "react-icons/si";
import { useRouter } from "next/router";

import SidebarItem from "./components/sidebar-item/sidebar-item.component";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { SidebarProps } from "./sidebar.types";
import LogoutModal from "../../../logout-modal/logout-modal.component";

function Sidebar({ canShowlogoutModal, handleLogout }: SidebarProps) {
  const { data: session } = useSession();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleSignOut = () => signOut();
  return (
    <div
      className={`
      fixed
      left-0
      grid
      grid-cols-1
      grid-rows-[300px_auto_100px]
      h-screen 
      py-4
      ${isExpanded ? "w-64" : "w-24"}
      duration-75
      bg-background
      shadow-md
      `}
    >
      {/* User container */}
      <div className="flex items-center justify-start flex-col gap-4">
        {session?.user?.image && (
          <Image
            src={session.user.image as string}
            blurDataURL={session.user.image as string}
            width={isExpanded ? 60 : 30}
            height={isExpanded ? 60 : 30}
            priority={true}
            alt="use-profile"
            className="rounded-full"
          />
        )}
        {isExpanded && (
          <p className="font-semibold animate-fade animate-duration-[3ms] break-all">
            {session?.user?.name}
          </p>
        )}
      </div>

      {/* Main Container */}
      <div className="flex flex-col items-center justify-start gap-4">
        {routes.map((route) => (
          <Link href={route.route} key={route.route} className="w-full">
            <SidebarItem
              icon={route.icon}
              isExpanded={isExpanded}
              label={route.label}
              currentRoute={route.route}
            />
          </Link>
        ))}
      </div>

      {/* Footer container */}
      <div className="flex flex-col items-center justify-end gap-4">
        <div
          className="hover:cursor-pointer flex items-center justify-center gap-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <AiOutlineArrowRight
            className={`${
              isExpanded ? "rotate-180" : "rotate-0"
            }       duration-300`}
            size={23}
            onClick={() => setIsExpanded(!isExpanded)}
          />
          {isExpanded && (
            <p className="slit-in-horizontal font-semibold">Comprimir</p>
          )}
        </div>

        <SidebarItem
          handleClick={() => handleLogout(true)}
          icon={ImExit}
          isExpanded={isExpanded}
          label={"Sair"}
        />
        <LogoutModal
          canShowlogoutModal={canShowlogoutModal}
          handleLogout={handleSignOut}
          handleCancel={() => handleLogout(false)}
        />
      </div>
    </div>
  );
}

export default Sidebar;
