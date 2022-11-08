import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

function OffersCard({packData}) {
    return (
        <div
            className="
        flex
        p-6 w-300 h-300 md:p-2 md:w-300 md:h-300
        drop-shadow-md	
        rounded-md"
        >
            <div className="flex flex-col w-full">
                <Link
                    href={`/special-offers/${packData.attributes.Slug}`}
                    className=""
                >
                    <div className="relative w-full h-[65vh] back-linear">
                        <Image
                            src={`https://phpstack-841991-2998353.cloudwaysapps.com/${packData.attributes.Image.data.attributes.formats.medium.url}`}
                            alt={
                                packData.attributes.Image.data.attributes
                                    .alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-[20px] left-[15px] z-10">
                            <h3 className=" text-lg font-mrseaves text-white ">
                                <Link
                                    href={`/special-offers/${packData.attributes.Slug}`}
                                >
                                    {packData.attributes.Title}
                                </Link>
                            </h3>
                            <Link
                                href={`/special-offers/${packData.attributes.Slug}`}
                            >
                                <span className="text-white text-xs border-b border-solid border-white pb-1">
                                    View Offer
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

export default OffersCard;
