import React from "react";
import Image from "next/image";
import { AboutCardProps } from "./about-card.types";

const AboutCard = ({ title, image, text }: AboutCardProps) => {
  return (
    <div
      className="
                w-72
                h-full
                flex 
                flex-col
                gap-4 
                rounded-lg
                bg-disabled-hover
                text-white
                "
    >
      <h2
        className="px-6 pt-6 text-base text-gray-700 uppercase font-black">{title}</h2>
      <p
        className="px-6 text-sm text-gray-700">{text}</p>
      <div className="mt-auto">
        <Image
          src={image as string}
          width={500}
          height={500}
          alt={title as string}
        />
      </div>
    </div>
  );
};
export default AboutCard;
