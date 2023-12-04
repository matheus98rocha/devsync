import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { postOptions } from "../../data/post-options.data";
import Dropdown from "../dropdown/dropdown.component";
import { PostOptionsProps } from "./post-options.types";

const PostOptions = ({ handleDeleteModal, amIThePostOwner, showOptions, handleShowOptions }: PostOptionsProps) => {
    const checkPosts = amIThePostOwner ? postOptions.myPostsOptions : postOptions.otherPostsOptions;
    return (
        <div className="relative inline-block ml-auto">
            <BsThreeDots
                className="cursor-pointer"
                onClick={() => handleShowOptions(!showOptions)}
            />
            {showOptions && (
                <div className="absolute top-0 right-0 mt-8">
                    <Dropdown handleDeleteModal={handleDeleteModal} options={checkPosts} />
                </div>
            )}
        </div>
    );
};

export default PostOptions;