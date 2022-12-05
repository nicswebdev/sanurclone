import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

function Card({dataEx}) {
    return (
        <div
            className="
        flex
        p-2 w-300 h-300 md:p-2 md:w-300 md:h-300
        drop-shadow-md	
        rounded-md"
        >
            <div className="flex flex-col w-full">
                <div className="relative w-full h-[55vh] back-linear">
                    <Image
                        src={`https://phpstack-841991-3041837.cloudwaysapps.com/${dataEx.attributes.Image.data.attributes.formats.medium.url}`}
                        alt={
                            dataEx.attributes.Image.data.attributes
                                .alternativeText
                        }
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-[20px] left-[15px] z-10">
                        <h1 className="text-white text-lg">
                            <Link
                                href={`/experiences/${dataEx.attributes.Slug}`}
                            >
                                {dataEx.attributes.Title}
                            </Link>
                        </h1>
                        <Link href={`/experiences/${dataEx.attributes.Slug}`}>
                            <span className="text-white text-xs border-b border-solid border-white pb-1">
                                View Experience
                            </span>
                        </Link>
                    </div>
                </div>

                {/* <p className="font-sans">{dataEx.attributes.Excerpt}</p> */}
            </div>
        </div>
    );
}

export default Card;
