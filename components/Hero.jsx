import Image from "next/image";
import React from "react";

const Hero = ({heroImg}) => {
    return (
        <div className="flex items-center justify-center h-[26rem] bg-fixed bg-center bg-cover hero-linear">
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]" /> */}
            <div className="relative w-full h-[26rem]">
                <Image
                    src={`https://phpstack-841991-2998353.cloudwaysapps.com/${heroImg}`}
                    alt="Header Image"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
