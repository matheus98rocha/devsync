"use client";
import React from "react";
import SidebarMobileItem from "./components/sidebar-mobile-item";
import { routes } from "@/constants/routes";
import Link from "next/link";

const SidebarMobile = () => (
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
);

export default SidebarMobile;