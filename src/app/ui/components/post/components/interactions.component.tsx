import React from "react";
import * as Bi from "react-icons/bi";
import { postMock } from "../mock/post.mock";

const Interactions = () => {
    const [isLiked, setIsLiked] = React.useState(false);
    const CheckIsLiked = isLiked ? 'hover:cursor-pointer animate-jump text-primary' : 'hover:cursor-pointer animate-jump';
    return (
        <div className="w-full flex items-center justify-around my-2 border-t pt-5 border-[#d0d0d0]">
            <div className="hover:cursor-pointer hover:text-primary-hover duration-300" onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? (
                    <Bi.BiSolidLike className={CheckIsLiked} size={25} />
                ) : (
                    <Bi.BiLike className={CheckIsLiked} size={25} />
                )}
                <p>Gostei</p>
            </div>
            {postMock.map((post, index) => (
                <div key={index} className="hover:cursor-pointer hover:text-primary-hover duration-300">
                    <post.icon size={25} />
                    <p>{post.label}</p>
                </div>
            ))}
        </div>
    )
};

export default Interactions;