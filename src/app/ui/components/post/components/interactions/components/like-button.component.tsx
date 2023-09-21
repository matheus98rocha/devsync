import React from "react";
import * as Bi from "react-icons/bi";

function LikeButton() {
  const [isLiked, setIsLiked] = React.useState(false);

  const checkIsLiked = React.useMemo(() => {
    return `hover:cursor-pointer animate-jump${isLiked ? " text-primary" : ""}`;
  }, [isLiked]);

  return (
    <div
      className="flex items-center justify-center gap-2 hover:cursor-pointer hover:text-primary-hover duration-300"
      onClick={() => setIsLiked(!isLiked)}
    >
      {isLiked ? (
        <Bi.BiSolidLike className={checkIsLiked} size={25} />
      ) : (
        <Bi.BiLike className={checkIsLiked} size={25} />
      )}
      <p>Gostei</p>
    </div>
  );
}

export default LikeButton;
