import React, { useEffect, useState } from "react";
import { AboutCardProps } from "./interfaces/about-card.interface";
import Image from "next/image";

const AboutCard = ({ card }: AboutCardProps) => {
    const [isWideScreen, setIsWideScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1520);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        // <div className='grid grid-cols-2 gap-10'>
        <div className={`grid ${isWideScreen ? 'grid-cols-2' : 'grid-cols-1'} gap-10`}>
            {card.map((about, index) => (
                <div key={index} 
                className='
                flex flex-col gap-4 p-6 rounded-lg bg-disabled-hover text-white
                h-42
                '>
                    <h2 className="text-base text-gray-700 uppercase font-black">{about.title}</h2>
                    <p className="text-sm text-gray-700">{about.text}</p>
                    <img src={about.image} alt={about.title} 
                    // className="w-60" 
                    />
                    {/* <Image
                        src={about.image as string}
                        width="100"
                        height="100"
                        alt={about.title as string}
                    /> */}
                </div>
            ))}
        </div>
    );
};
export default AboutCard;