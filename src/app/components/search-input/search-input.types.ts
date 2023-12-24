import { IUser } from "@/app/interfaces/user";
import { ChangeEvent } from "react";

export interface SearchProps {
  searchValue: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  handleResetSearchBar: () => void;
  usersData: IUser[],
}
