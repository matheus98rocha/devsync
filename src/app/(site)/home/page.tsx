"use client";
import React from "react";

import ClientOnly from "@/app/ui/layout/logged-user/logged-user";

function Home() {
  const [isExpandedSideMenu, setIsExpandedSideMenu] = React.useState(false);

  return (
    <ClientOnly>
      <div
        className="min-h-screen
      w-3/6
      lg:shadow-md
      lg:bg-background
      flex
      flex-col
      items-center
      justify-start
      overflow-x-hidden "
      ></div>
    </ClientOnly>
  );
}

export default Home;
