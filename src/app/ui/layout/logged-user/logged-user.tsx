"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "@/app/ui/components/loading/loading.component";
import { isMobileOnly } from "mobile-device-detect";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import ProgramingLinksMobile from "./logged-user-mobile/programing-links-mobile/programing-links-mobile.component";
import SidebarMobile from "./logged-user-mobile/sidebar-mobile/sidebar-mobile";
import ProgramingLinks from "./logger-user-desktop/programing-links/programing-links";
import Sidebar from "./logger-user-desktop/sidebar/sidebar";
import Header from "./logger-user-desktop/header/header";

interface LoaggedUserProps {
  children: React.ReactNode;
}

function LoaggedUser({ children }: LoaggedUserProps) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/?callbackUrl=/protected/home");
    },
  });
  const [hasMounted, setHasMounted] = useState(false);

  console.log(showLogoutModal);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* Mobile components*/}
      {isMobileOnly && <SidebarMobile />}
      {isMobileOnly && <ProgramingLinksMobile />}

      {/* Desktop components */}
      {!isMobileOnly && (
        <Sidebar
          canShowlogoutModal={showLogoutModal}
          handleLogout={setShowLogoutModal}
        />
      )}
      {!isMobileOnly && <ProgramingLinks />}

      <Suspense fallback={<Loading />}>
        <div className={`w-screen h-full flex flex-col items-center justify-center ${showLogoutModal && "-z-10"}`}>
          <Header />
          {children}
        </div>
      </Suspense>
    </div>
  );
}

export default LoaggedUser;
