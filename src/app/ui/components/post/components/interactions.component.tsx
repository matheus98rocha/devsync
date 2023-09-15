import React from "react";
import * as Bi from "react-icons/bi";
import { postMock } from "../mock/post.mock";

const Interactions = () => {
    const [isLiked, setIsLiked] = React.useState(false);
    return (
        <div className="w-full flex items-center justify-around my-2 border-t pt-5 border-[#d0d0d0]">
            <div>
                {isLiked ? (
                    <Bi.BiSolidLike
                        className="hover:cursor-pointer animate-jump text-primary"
                        size={25}
                        onClick={() => setIsLiked(false)}
                    />
                ) : (
                    <Bi.BiLike
                        className="hover:cursor-pointer animate-jump"
                        size={25}
                        onClick={() => setIsLiked(true)}
                    />
                )}
                <p>Gostei</p>
            </div>
            {postMock.map((post, index) => (
                <div key={index}>
                    <post.icon className="hover:cursor-pointer" size={25} />
                    <p>{post.label}</p>
                </div>
            ))}
        </div>
    )
};

export default Interactions;