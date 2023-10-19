"use client";
import React from "react";
import * as BS from "react-icons/bs";

import { signIn } from "next-auth/react";

function SocialMediaIcons({}) {
  const iconsData = React.useMemo(
    () => [
      {
        label: "Google",
        icon: <BS.BsGoogle size={25} />,
        onClickIcon: () =>
          signIn("google", {
            callbackUrl: "/home",
          }),
      },
    ],
    []
  );

  return (
    <div
      className="
    w-full
    bg-slate-500
    rounded
    p-3
    flex
    items-center
    justify-center
    gap-3
    cursor-pointer
    hover:bg-[#4285F4]
    animate-ease-linear
    delay-150"
      onClick={() =>
        signIn("google", {
          callbackUrl: "/home",
        })
      }
    >
      <BS.BsGoogle size={25} color="#ffff" />
      <p className="text-sm text-white">GOOGLE</p>
    </div>
  );
}

export default SocialMediaIcons;
