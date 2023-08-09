import Image from "next/image";
import React from "react";

function Post() {
  return (
    <div
      className="w-full
  h-96
  shadow-sm
  border
  border-[#d0d0d0]
  flex
  items-center
  justify-center
  flex-col
  rounded-lg
  py-50
"
    >
      <p>Pessoal esse é o meu mais novo projeto, espero que gostem</p>
      <Image
        src={
          "https://raw.githubusercontent.com/matheus98rocha/prime-flix/master/public/readme/home.png"
        }
        width={500}
        height={500}
        alt="post"
      />
    </div>
  );
}

export default Post;
