import React from "react";
import Image from "next/image";
import { AboutCardProps } from "./interfaces/about-card.interface";

const AboutCard = ({ title, image, text }: AboutCardProps) => {
  return (
    <div
      className="
                w-72
                h-[20]
                flex 
                flex-col
                gap-4 
                p-6 
                rounded-lg
                bg-disabled-hover
                text-white
                "
    >
      <h2 className="text-base text-gray-700 uppercase font-black">{title}</h2>
      <p className="text-sm text-gray-700">{text}</p>
      <Image
        src={image as string}
        width="100"
        height="100"
        alt={title as string}
      />
    </div>
  );
};
export default AboutCard;
