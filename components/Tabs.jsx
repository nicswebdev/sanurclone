import React from "react";
import {Tab} from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});

const Tabs = ({galleryData}) => {
    return (
        <div className="w-full px-2 py-8 sm:px-0 mx-auto">
            <Tab.Group>
                <Tab.List className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 p-1 justify-center">
                    <Tab
                        className={({selected}) =>
                            classNames(
                                "border border-solid py-2.5 px-2.5 text-sm leading-5 sans",
                                selected
                                    ? "bg-[#A6631B] text-white outline-none border-[#A6631B]"
                                    : "bg-white text-black outline-none border-[#000]"
                            )
                        }
                    >
                        {galleryData.data.attributes.Villa_Tab_Text}
                    </Tab>
                    <Tab
                        className={({selected}) =>
                            classNames(
                                "border border-solid py-2.5 px-2.5 text-sm leading-5 sans",
                                selected
                                    ? "bg-[#A6631B] text-white outline-none border-[#A6631B]"
                                    : "bg-white text-black outline-none border-[#000]"
                            )
                        }
                    >
                        {galleryData.data.attributes.Wedding_Tab_Text}
                    </Tab>
                    <Tab
                        className={({selected}) =>
                            classNames(
                                "border border-solid py-2.5 px-2.5 text-sm leading-5 sans",
                                selected
                                    ? "bg-[#A6631B] text-white outline-none border-[#A6631B]"
                                    : "bg-white text-black outline-none border-[#000]"
                            )
                        }
                    >
                        {galleryData.data.attributes.Restaurant_Tab_Text}
                    </Tab>
                    <Tab
                        className={({selected}) =>
                            classNames(
                                "border border-solid py-2.5 px-2.5 text-sm leading-5 sans",
                                selected
                                    ? "bg-[#A6631B] text-white outline-none border-[#A6631B]"
                                    : "bg-white text-black outline-none border-[#000]"
                            )
                        }
                    >
                        {galleryData.data.attributes.Spa_Tab_Text}
                    </Tab>
                    <Tab
                        className={({selected}) =>
                            classNames(
                                "border border-solid py-2.5 px-2.5 text-sm leading-5 sans",
                                selected
                                    ? "bg-[#A6631B] text-white outline-none border-[#A6631B]"
                                    : "bg-white text-black outline-none border-[#000]"
                            )
                        }
                    >
                        {galleryData.data.attributes.Surrounding_Tab_Text}
                    </Tab>
                    {/* <Tab
                        className={({selected}) =>
                            classNames(
                                "border border-solid py-2.5 px-2.5 text-sm leading-5 sans",
                                selected
                                    ? "bg-[#A6631B] text-white outline-none border-[#A6631B]"
                                    : "bg-white text-black outline-none border-[#000]"
                            )
                        }
                    >
                        {galleryData.data.attributes.Villa_Ground_Tab_Text}
                    </Tab>
                    <Tab
                        className={({selected}) =>
                            classNames(
                                "border border-solid py-2.5 px-2.5 text-sm leading-5 sans",
                                selected
                                    ? "bg-[#A6631B] text-white outline-none border-[#A6631B]"
                                    : "bg-white text-black outline-none border-[#000]"
                            )
                        }
                    >
                        {galleryData.data.attributes.Video_Tab_Text}
                    </Tab> */}
                </Tab.List>
                <Tab.Panels className="mt-4">
                    <Tab.Panel className="bg-white p-3">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 px-1 md:px-4">
                            {galleryData.data.attributes.Villa.map(
                                (item, index) => {
                                    return (
                                        <>
                                            <div className="relative w-full h-[30vh]">
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${item.Image.data.attributes.formats.small.url}`}
                                                    alt={
                                                        item.Image.data
                                                            .attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel className="bg-white p-3">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 px-1 md:px-4">
                            {galleryData.data.attributes.Wedding.map(
                                (item, index) => {
                                    return (
                                        <>
                                            <div className="relative w-full h-[30vh]">
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${item.Image.data.attributes.formats.small.url}`}
                                                    alt={
                                                        item.Image.data
                                                            .attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel className="bg-white p-3">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 px-1 md:px-4">
                            {galleryData.data.attributes.Restaurant.map(
                                (item, index) => {
                                    return (
                                        <>
                                            <div className="relative w-full h-[30vh]">
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${item.Image.data.attributes.formats.small.url}`}
                                                    alt={
                                                        item.Image.data
                                                            .attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel className="bg-white p-3">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 px-1 md:px-4">
                            {galleryData.data.attributes.Spa.map(
                                (item, index) => {
                                    return (
                                        <>
                                            <div className="relative w-full h-[30vh]">
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${item.Image.data.attributes.formats.small.url}`}
                                                    alt={
                                                        item.Image.data
                                                            .attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel className="bg-white p-3">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 px-1 md:px-4">
                            {galleryData.data.attributes.Surrounding.map(
                                (item, index) => {
                                    return (
                                        <>
                                            <div className="relative w-full h-[30vh]">
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${item.Image.data.attributes.formats.small.url}`}
                                                    alt={
                                                        item.Image.data
                                                            .attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </Tab.Panel>
                    {/* <Tab.Panel className="bg-white p-3">
                        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 px-1 md:px-4">
                            {galleryData.data.attributes.Villa_Ground.map(
                                (item, index) => {
                                    return (
                                        <>
                                            <div className="relative w-full h-[30vh]">
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${item.Image.data.attributes.formats.small.url}`}
                                                    alt={
                                                        item.Image.data
                                                            .attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </div>
                    </Tab.Panel>
                    <Tab.Panel className="bg-white p-3 flex justify-center">
                        <ReactPlayer
                            url={galleryData.data.attributes.Video}
                            config={{
                                youtube: {
                                    playerVars: {showinfo: 0, rel: 0},
                                },
                            }}
                            width="75%"
                            height="80vh"
                            className=""
                        />
                    </Tab.Panel> */}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Tabs;
