import React from "react";
import { AboutCardProps } from "./about-card.types";

const AboutCard = ({ title, image, text }: AboutCardProps) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "500px",
  };

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
      style={cardStyle}
    >
      <div className="flex flex-col h-full bg-opacity-50 bg-black p-6">
        <h2 className="text-base text-gray-700 uppercase font-black">
          {title}
        </h2>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;