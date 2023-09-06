import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import * as Bi from "react-icons/bi";

const Reply = () => {
    const { data: session } = useSession();
    const [isLiked, setIsLiked] = React.useState(false);
    const [isDisLiked, setIsDisliked] = React.useState(false);

    // Toggle like state and set dislike state to false
    const handleLike = () => {
        setIsLiked(!isLiked);
        setIsDisliked(false);
    };

    // Toggle dislike state and set like state to false
    const handleDislike = () => {
        setIsDisliked(!isDisLiked);
        setIsLiked(false);
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-row space-x-4 p-4">
                <div className="flex-shrink-0">
                    {session?.user?.image && (
                        <Image
                            src={session.user.image as string}
                            blurDataURL={session.user.image as string}
                            width={48}
                            height={48}
                            priority={true}
                            alt="user-profile"
                            className="rounded-full"
                        />
                    )}
                </div>
                <div className="flex-grow">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{session?.user?.name}</span>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-800">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ratione nisi labore nobis cupiditate iusto dolorum voluptate quo cum, soluta totam iure eveniet explicabo earum, vel eligendi excepturi quis facere.
                    </p>
                </div>
            </div>
            <div className="flex items-center flex-row gap-4 pl-20">
            {isLiked ? (
                    <Bi.BiSolidLike
                        className="hover:cursor-pointer animate-jump text-primary"
                        size={25}
                        onClick={handleLike}
                    />
                ) : (
                    <Bi.BiLike
                        className="hover:cursor-pointer animate-jump"
                        size={25}
                        onClick={handleLike}
                    />
                )}
                {isDisLiked ? (
                    <Bi.BiSolidDislike
                        className="hover:cursor-pointer animate-jump text-primary"
                        size={25}
                        onClick={handleDislike}
                    />
                ) : (
                    <Bi.BiDislike
                        className="hover:cursor-pointer animate-jump"
                        size={25}
                        onClick={handleDislike}
                    />
                )}
                <span className="text-xs text-gray-500 font-semibold">REPLY</span>
            </div>
        </div>
    );
};

export default Reply;