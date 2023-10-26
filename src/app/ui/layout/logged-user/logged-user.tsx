"use client";
import React, { Suspense, useState } from "react";
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
import PostModal from "../post-modal/post-modal.component";
import PostButton from "./components/post-button/post-button.component";

interface LoaggedUserProps {
  children: React.ReactNode;
  currentPage: string;
}

function LoaggedUser({ children, currentPage }: LoaggedUserProps) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [text, setText] = React.useState("");

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/?callbackUrl=/protected/${currentPage}`);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) setSelectedFile(files[0]);
  };

  if (status === 'loading') return <LoadingFullScreen />;
  return (
    <>
      <LogoutModal
        canShowlogoutModal={showLogoutModal}
        handleLogout={signOut}
        handleCancel={() => setShowLogoutModal(false)}
      />
      <PostModal
        canShowPostModal={showPostModal}
        handleCloseModal={() => {
          setShowPostModal(false);
          setSelectedFile(null);
          setText("");
        }}
        text={text}
        handleText={setText}
        handleFileChange={handleFileChange}
        selectedFile={selectedFile}
        handleSelectedFile={setSelectedFile}
        characterLimit={300}
      />
      <div className="h-screen w-screen flex items-center justify-center">
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
          <PostButton handlePostModalVisibility={setShowPostModal} />
        </Suspense>
      </div>
    </>
  );
}

export default LoaggedUser;