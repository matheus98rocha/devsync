"use client";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "@/app/ui/components/loading/loading.component";
import { isMobileOnly } from "mobile-device-detect";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SidebarMobile from "./logged-user-mobile/sidebar-mobile/sidebar-mobile";
import Sidebar from "./logger-user-desktop/sidebar/sidebar";
import Header from "./logger-user-desktop/header/header";
import LogoutModal from "../logout-modal/logout-modal.component";
import { signOut } from "next-auth/react";
import LoadingFullScreen from "../../components/loading-full-screen/loading-full-screen";
import { IUser } from "@/app/interfaces/user";

interface LoaggedUserProps {
  children: React.ReactNode;
  currentPage: string;
  usersData?: IUser[],
}

function LoaggedUser({ children, currentPage, usersData }: LoaggedUserProps) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/?callbackUrl=/protected/${currentPage}`);
    },
  });
  console.log(usersData)
  if (status === 'loading') return <LoadingFullScreen />;
  return (
    <>
      <LogoutModal
        canShowlogoutModal={showLogoutModal}
        handleLogout={signOut}
        handleCancel={() => setShowLogoutModal(false)}
      />
      <div className="h-screen w-screen flex items-center justify-center">
        {/* Mobile components*/}
        {isMobileOnly && <SidebarMobile />}
        {/* Arquivo não será utilizado por agora, mas sim no futuro */}
        {/* {isMobileOnly && <ProgramingLinksMobile />} */}

        {/* Desktop components */}
        {!isMobileOnly && <Sidebar handleShowLogout={setShowLogoutModal} />}
        {/* Arquivo não será utilizado por agora, mas sim no futuro */}
        {/* {!isMobileOnly && <ProgramingLinks />} */}

        <Suspense fallback={<Loading />}>
          <div className={`w-screen h-full flex flex-col items-center justify-center ${!isMobileOnly && "pl-2"}`}>
            {currentPage === "home" &&
              <Header handleShowLogoutModal={setShowLogoutModal} isOnMobile={isMobileOnly} usersData={usersData as IUser[]} />
            }
            {children}
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default LoaggedUser;