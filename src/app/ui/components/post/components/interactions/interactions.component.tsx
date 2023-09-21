import React from "react";
import { dataInteractions } from "./data/data-interactions.data";
import LikeButton from "./components/like-button.component";

const Interactions = () => {
  return (
    <div className="w-full flex items-center justify-around my-2 border-t pt-5 border-[#d0d0d0]">
      <LikeButton />
      {dataInteractions.map((icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-2 hover:cursor-pointer hover:text-primary-hover duration-300"
        >
          <icon.icon size={25} />
          <p>{icon.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Interactions;
