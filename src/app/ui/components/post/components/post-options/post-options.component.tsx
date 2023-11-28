import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { postOptions } from "../../data/post-options.data";
import Dropdown from "../dropdown/dropdown.component";

const PostOptions = ({ handleDeleteModal, isCurrentSession, showOptions, handleShowOptions
}: { handleDeleteModal: any, isCurrentSession: string, showOptions: boolean, handleShowOptions: (showOptions: boolean) => void }) => {
    return (

            <div className="relative inline-block ml-auto">
                <BsThreeDots
                    className="cursor-pointer"
                    onClick={() => handleShowOptions(!showOptions)}
                />
                {showOptions && (
                    <div className="absolute top-0 right-0 mt-8">
                        {isCurrentSession ?
                            <Dropdown handleDeleteModal={handleDeleteModal} options={postOptions.myPostsOptions} />
                            :
                            <Dropdown options={postOptions.otherPostsOptions} />
                        }
                    </div>
                )}
            </div>
    );
};

export default PostOptions;