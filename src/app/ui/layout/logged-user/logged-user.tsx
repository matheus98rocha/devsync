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
import LogoutModal from "../logout-modal/logout-modal.component";
import { signOut } from "next-auth/react";
import LoadingFullScreen from "../../components/loading-full-screen/loading-full-screen";

interface LoaggedUserProps {
  children: React.ReactNode;
  currentPage: string;
}

function LoaggedUser({ children, currentPage }: LoaggedUserProps) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const {status} = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/?callbackUrl=/protected/${currentPage}`);
    },
  });

  if (status === 'loading') return <LoadingFullScreen />;
  return (
    <>
      <LogoutModal
        canShowlogoutModal={showLogoutModal}
        handleLogout={signOut}
        handleCancel={() => setShowLogoutModal(false)}
      />
      <div className="relative h-screen w-screen flex items-center justify-center">
        {/* Mobile components*/}
        {isMobileOnly && <SidebarMobile />}        
        {/* {isMobileOnly && <ProgramingLinksMobile />} */}

        {/* Desktop components */}
        {!isMobileOnly && <Sidebar handleShowLogout={setShowLogoutModal} />}
        {/* {!isMobileOnly && <ProgramingLinks />} */}

        <Suspense fallback={<Loading />}>
          <div className="w-screen h-full flex flex-col items-center justify-center">
            {children}
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default LoaggedUser;