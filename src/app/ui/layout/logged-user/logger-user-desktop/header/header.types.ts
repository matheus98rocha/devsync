import { IUser } from "@/app/interfaces/user";

export interface IHeaderProps {
    usersData: IUser[],
    isOnMobile: boolean,
    handleShowLogoutModal: (showLogoutModal: boolean) => void,
};