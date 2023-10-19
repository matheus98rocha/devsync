"use client";
import React from "react";
import { SearchProps } from "./search-input.types";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import SearchList from "./components/search-list/search-list.component";
import { IUser } from "@/app/interfaces/user";

function SearchInput({
  searchValue,
  onChangeSearch,
  handleResetSearchBar,
  usersData,
}: SearchProps) {
  const [isExpandedSearchInput, setIsPexpandedSearchInput] =
    React.useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsPexpandedSearchInput(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const [filteredUsers, setFilteredUsers] = React.useState<IUser[]>([]);
  React.useEffect(() => {
    const filterUsers = () => {
      const filtered = usersData.filter((user) =>
        user.name?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredUsers(filtered);
    };
    filterUsers();
  }, [usersData, searchValue]);

  return (
    <div ref={ref} className="w-64">
      <>
        {isExpandedSearchInput ? (
          <div className="relative animate-ease-linear duration-100">
            <label htmlFor="Search" className="sr-only">
              Search{" "}
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Pesquisar"
              autoComplete="true"
              value={searchValue}
              onChange={onChangeSearch}
              className="w-full rounded-md border-gray-200 bg-contrastBackground py-2.5 ps-2 pe-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
                <AiOutlineArrowLeft
                  onClick={() => {
                    setIsPexpandedSearchInput(!isExpandedSearchInput);
                    handleResetSearchBar();
                  }}
                />
              </button>
            </span>
          </div>
        ) : (
          <div
            className="bg-contrastBackground p-2 rounded-md cursor-pointer w-8 flex items-start justify-start"
            onClick={() => setIsPexpandedSearchInput(!isExpandedSearchInput)}
          >
            <AiOutlineSearch />
          </div>
        )}
      </>
      {searchValue && filteredUsers.length > 0 && (
        <SearchList users={filteredUsers}/>
      )}
    </div>
  );
}

export default SearchInput;
