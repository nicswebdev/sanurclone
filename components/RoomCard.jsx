import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {BiBed} from "react-icons/bi";
import {BsArrowsFullscreen} from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function RoomCard({dataRoom}) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    return (
        <div
            className="
        flex
        p-2 w-full h-300 md:p-2 md:w-300 md:h-300	
        rounded-md"
        >
            <div className="flex flex-col w-full border border-solid border-[#ebebeb]">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={3200}
                    showDots={false}
                    className=""
                >
                    {dataRoom.attributes.Gallery.data.map((item, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className="relative w-full h-[50vh]"
                                >
                                    <Image
                                        src={`https://phpstack-841991-3041837.cloudwaysapps.com/${item.attributes.formats.medium.url}`}
                                        alt={item.attributes.alternativeText}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </>
                        );
                    })}
                </Carousel>
                <div className="px-3">
                    <h1 className="text-[#333] pt-4 text-[25px]">
                        <Link href={`/villas/${dataRoom.attributes.Slug}`}>
                            {dataRoom.attributes.Title}
                        </Link>
                    </h1>
                    <div className="flex items-center gap-2">
                        <span className="text-xs flex gap-2 items-center">
                            <BsArrowsFullscreen />
                            {dataRoom.attributes.Size}
                        </span>{" "}
                        |{" "}
                        <span className="text-xs flex gap-2 items-center">
                            <BiBed />
                            {dataRoom.attributes.Bed_Type}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 my-8 md:grid-cols-2">
                        {dataRoom.attributes.Villa_Facilities.data.map(
                            (item, index) => {
                                return (
                                    <>
                                        <div
                                            key={index}
                                            className="flex gap-2 items-center"
                                        >
                                            <div className="relative w-4 h-4">
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${item.attributes.Icon.data.attributes.url}`}
                                                    alt={
                                                        item.attributes.Icon
                                                            .data.attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-xs">
                                                {item.attributes.Title}
                                            </span>
                                        </div>
                                    </>
                                );
                            }
                        )}
                    </div>
                    <div className="flex gap-4  justify-center my-8">
                        <Link href={`${dataRoom.attributes.Villa_Link}`}>
                            <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                                Book Now
                            </button>
                        </Link>
                        <Link href={`/villas/${dataRoom.attributes.Slug}`}>
                            <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                                More Detail
                            </button>
                        </Link>
                    </div>
                </div>
                {/* <p className="font-sans">{dataEx.attributes.Excerpt}</p> */}
            </div>
        </div>
    );
}

export default RoomCard;
