"use client";
import React from "react";
import { useElementsContext } from "@/context/elements.context";
import SearchInput from "@/app/ui/components/search-input/search-input.component";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import LogoutModal from "../../../logout-modal/logout-modal.component";
import { IUser } from "@/app/interfaces/user";

function HeaderMobile({ usersData }: { usersData: IUser[] }) {
    const { data: session } = useSession();
    const pathname = usePathname();
    const { isOpenDropdownMenuMobile, toggleIsOpenDropdownMenuMobile } =
        useElementsContext();
    const handleSignOut = () => signOut();
    const [showLogoutModal, setShowLogoutModal] = React.useState(false);

    React.useEffect(() => {
        console.log(usersData);
    }, [usersData]);

    const [searchValue, setSearchValue] = React.useState("");

    console.log(pathname)
    return (
        <div
            className={`
        h-10 
        w-full
        bg-background 
        mb-1
        flex
        items-center
        justify-between
        ease-out duration-75
        px-10
        py-9
        shadow-md
  `}
        >
            <SearchInput
                searchValue={searchValue}
                onChangeSearch={(event) => setSearchValue(event.target.value)}
                handleResetSearchBar={() => setSearchValue("")}
                usersData={usersData}
            />

            {
            session?.user?.image && (
                <div className="relative">
                    <Image
                        src={session.user.image as string}
                        blurDataURL={session.user.image as string}
                        placeholder="blur"
                        width={40}
                        height={40}
                        priority={true}
                        alt="use-profile"
                        className="rounded-full cursor-pointer"
                        onClick={() => toggleIsOpenDropdownMenuMobile()}
                    />
                    {isOpenDropdownMenuMobile && (
                        <div className="absolute top-10 right-1 p-2 bg-contrastBackground shadow-lg">
                            <p onClick={() => setShowLogoutModal(true)}>Sair</p>
                            <LogoutModal
                                canShowlogoutModal={showLogoutModal}
                                handleLogout={handleSignOut}
                                handleCancel={() => setShowLogoutModal(false)}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default HeaderMobile;