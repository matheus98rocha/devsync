import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { postOptions } from "../../data/post-options.data";
import Dropdown from "../dropdown/dropdown.component";
import { PostOptionsProps } from "./post-options.types";

const PostOptions = ({
  handleDeleteModal,
  showOptions,
  handleShowOptions,
  isMyPost,
}: PostOptionsProps) => {
  const openDeletePostModal = () => isMyPost && handleDeleteModal(true);
  return (
    <>
      {
        isMyPost &&
        <div className="relative inline-block ml-auto">
          <BsThreeDots
            className="cursor-pointer"
            onClick={() => handleShowOptions(!showOptions)}
          />
          {showOptions && (
            <div className="absolute top-0 right-0 mt-8">
              <Dropdown openDeletePostModal={openDeletePostModal} options={postOptions.myPostsOptions} />
            </div>
          )}
        </div>
      }
    </>
  );
};

export default PostOptions;