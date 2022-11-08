import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

function Card({dataEx}) {
    return (
        <div
            className="
        flex
        p-6 w-300 h-300 md:p-2 md:w-300 md:h-300
        drop-shadow-md	
        rounded-md"
        >
            <div className="flex flex-col w-full">
                <Link href={`/experience/${dataEx.attributes.Slug}`}>
                    <div className="relative w-full h-[55vh] back-linear">
                        <Image
                            src={`https://phpstack-841991-2998353.cloudwaysapps.com/${dataEx.attributes.Image.data.attributes.formats.medium.url}`}
                            alt={
                                dataEx.attributes.Image.data.attributes
                                    .alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-[20px] left-[15px] z-10">
                            <h3 className="text-lg font-mrseaves text-white">
                                <Link
                                    href={`/experience/${dataEx.attributes.Slug}`}
                                >
                                    {dataEx.attributes.Title}
                                </Link>
                            </h3>
                            <Link
                                href={`/experience/${dataEx.attributes.Slug}`}
                            >
                                <span className="text-white text-xs border-b border-solid border-white pb-1">
                                    View Experience
                                </span>
                            </Link>
                        </div>
                    </div>
                </Link>

                {/* <p className="font-sans">{dataEx.attributes.Excerpt}</p> */}
            </div>
        </div>
    );
}

export default Card;
