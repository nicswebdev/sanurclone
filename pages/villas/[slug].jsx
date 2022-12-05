import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BiBed} from "react-icons/bi";
import {BsArrowsFullscreen} from "react-icons/bs";
import RoomCard from "../../components/RoomCard";

const details = ({villaDetailData, villasData}) => {
    return (
        <>
            <Head>
                <title>
                    {villaDetailData.data[0].attributes.SEO.SEO_Title}
                </title>
                <meta
                    name="description"
                    content={
                        villaDetailData.data[0].attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={villaDetailData.data[0].attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    villaDetailData.data[0].attributes.Featured_Image.data
                        .attributes.url
                }
            />
            <div className="px-4 md:px-24 py-4 md:py-16">
                <h1 className="text-[#333] py-4 text-[33px] line-left">
                    {villaDetailData.data[0].attributes.Title}
                </h1>
                <div className="mb-4">
                    <span className="custom-sans">
                        Rate Start From:{" "}
                        {villaDetailData.data[0].attributes.Start_From} | Villa
                        Size: {villaDetailData.data[0].attributes.Size} | Bed
                        Type: {villaDetailData.data[0].attributes.Bed_Type} |
                        Occupancy:{" "}
                        {villaDetailData.data[0].attributes.Occupancy}
                    </span>
                </div>
                <div className="flex flex-col md:flex-row gap-8 my-8">
                    {villaDetailData.data[0].attributes.Villa_Facilities.data.map(
                        (item, index) => {
                            return (
                                <>
                                    <div className="flex gap-2 items-center">
                                        <div className="relative w-5 h-5">
                                            <Image
                                                src={`https://phpstack-841991-2998353.cloudwaysapps.com//${item.attributes.Icon.data.attributes.url}`}
                                                alt={
                                                    item.attributes.Icon.data
                                                        .attributes
                                                        .alternativeText
                                                }
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-sm">
                                            {item.attributes.Title}
                                        </span>
                                    </div>
                                </>
                            );
                        }
                    )}
                </div>
                {parser(villaDetailData.data[0].attributes.Villa_Descriptions)}
                <div className="my-8">
                    <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                        {
                            villaDetailData.data[0].attributes
                                .Check_Availability_Button_Text
                        }
                    </button>
                </div>
                <div className="grid grid-rows-none grid-cols-1 md:grid-cols-5 p-2 md:p-4 gap-4">
                    {villaDetailData.data[0].attributes.Gallery.data.map(
                        (gallery, index) => {
                            if (index === 0) {
                                return (
                                    <>
                                        <div className="relative md:w-[677px] h-[451px] md:col-span-3 row-span-2">
                                            <Image
                                                src={`https://phpstack-841991-2998353.cloudwaysapps.com//${gallery.attributes.formats.medium.url}`}
                                                alt={
                                                    gallery.attributes
                                                        .alternativeText
                                                }
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        <div className="relative md:w-[215px] h-[217px]">
                                            <Image
                                                src={`https://phpstack-841991-2998353.cloudwaysapps.com//${gallery.attributes.formats.medium.url}`}
                                                alt={
                                                    gallery.attributes
                                                        .alternativeText
                                                }
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </>
                                );
                            }
                        }
                    )}
                </div>
                <h1 className="text-[#333] py-4 mt-8 text-[33px] line-left">
                    {villaDetailData.data[0].attributes.Villa_Facilities_Text}
                </h1>
                <div className="custom-ul pl-6 custom-sans">
                    {parser(villaDetailData.data[0].attributes.All_Facilities)}
                </div>
                <h1 className="text-[#333] py-4 mt-8 text-[33px] line-left">
                    {villaDetailData.data[0].attributes.Villa_Benefits_Text}
                </h1>
                <div className="custom-ul pl-6 custom-sans">
                    {parser(villaDetailData.data[0].attributes.All_Benefits)}
                </div>
            </div>
            <div className="max-w-full p-4 pl-2 pr-2 md:pl-24 md:pr-24">
                <h1 className="text-[#333] py-4 mt-8 text-[33px] line-left">
                    More Villas
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {villasData.data.map((room, index) => {
                        if (
                            room.attributes.Title !==
                            villaDetailData.data[0].attributes.Title
                        ) {
                            return (
                                <div key={index}>
                                    <RoomCard key={index} dataRoom={room} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps({params}) {
    const slug = params.slug;

    const villaDetailData = await fetch(
        `https://phpstack-841991-2998353.cloudwaysapps.com/api/villas?filters[slug][$eq]=${slug}&populate[Villa_Facilities][populate]=*&populate[Facilities][populate]=*&populate[Featured_Image][populate]=*&populate[Benefits][populate]=*&populate[SEO][populate]=*&populate[Gallery][populate]=*&populate[Villa_Facilities][sort]=Title`
    ).then((res) => res.json());

    const villasData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/villas?populate[Villa_Facilities][populate]=*&populate[Facilities][populate]=*&populate[Featured_Image][populate]=*&populate[Benefits][populate]=*&populate[SEO][populate]=*&populate[Gallery][populate]=*&populate[Villa_Facilities][sort]=Title"
    ).then((res) => res.json());

    return {
        props: {
            villaDetailData,
            villasData,
        },
    };
}
