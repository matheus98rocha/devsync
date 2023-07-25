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

interface LoaggedUserProps {
  children: React.ReactNode;
}

function LoaggedUser({ children }: LoaggedUserProps) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const {} = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/?callbackUrl=/protected/home");
    },
  });
  const [hasMounted, setHasMounted] = useState(false);

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
    <div className="h-screen flex items-center justify-center">
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
      {!isMobileOnly && <ProgramingLinks showModal={showLogoutModal} />}

      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}

export default LoaggedUser;
