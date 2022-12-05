import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BiBed} from "react-icons/bi";
import {BsArrowsFullscreen} from "react-icons/bs";

const villas = ({villasPageData, villasData}) => {
    return (
        <>
            <Head>
                <title>{villasPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={
                        villasPageData.data.attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={villasPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    villasPageData.data.attributes.Header_Image.data.attributes
                        .url
                }
            />
            <div className="text-center px-4 md:px-24 py-4 md:py-16">
                <h1 className="text-[#333] py-4 text-[33px]">
                    {villasPageData.data.attributes.Title}
                </h1>
                {parser(villasPageData.data.attributes.Content)}
            </div>
            {villasData.data.map((item, index) => {
                return (
                    <>
                        <div
                            className="max-w-full px-4 md:px-16 mb-8"
                            key={index}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                <div className="relative w-full h-[60vh]">
                                    <Image
                                        src={`https://phpstack-841991-2998353.cloudwaysapps.com//${item.attributes.Featured_Image.data.attributes.formats.medium.url}`}
                                        alt={
                                            item.attributes.Featured_Image.data
                                                .attributes.alternativeText
                                        }
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center px-2 md:px-8">
                                    <h1 className="text-[#333] py-2 text-[25px]">
                                        {item.attributes.Title}
                                    </h1>
                                    <span className="mb-2 custom-sans">
                                        {item.attributes.Excerpt}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs flex gap-2 items-center">
                                            <BsArrowsFullscreen />
                                            {item.attributes.Size}
                                        </span>{" "}
                                        |{" "}
                                        <span className="text-xs flex gap-2 items-center">
                                            <BiBed />
                                            {item.attributes.Bed_Type}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4">
                                        {item.attributes.Villa_Facilities.data.map(
                                            (items, index) => {
                                                return (
                                                    <>
                                                        <div className="flex gap-2 items-center">
                                                            <div className="relative w-4 h-4">
                                                                <Image
                                                                    src={`https://phpstack-841991-2998353.cloudwaysapps.com//${items.attributes.Icon.data.attributes.url}`}
                                                                    alt={
                                                                        items
                                                                            .attributes
                                                                            .Icon
                                                                            .data
                                                                            .attributes
                                                                            .alternativeText
                                                                    }
                                                                    fill
                                                                    className="object-contain"
                                                                />
                                                            </div>
                                                            <span className="text-xs">
                                                                {
                                                                    items
                                                                        .attributes
                                                                        .Title
                                                                }
                                                            </span>
                                                        </div>
                                                    </>
                                                );
                                            }
                                        )}
                                    </div>
                                    <div className="flex gap-4 my-4">
                                        <Link href={item.attributes.Villa_Link}>
                                            <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                                                Book Now
                                            </button>
                                        </Link>
                                        <Link
                                            href={`villas/${item.attributes.Slug}`}
                                        >
                                            <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                                                More Detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default villas;

export async function getServerSideProps() {
    const villasPageData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/villa-page?populate=*"
    ).then((res) => res.json());

    const villasData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/villas?populate[Villa_Facilities][populate]=*&populate[Facilities][populate]=*&populate[Featured_Image][populate]=*&populate[Benefits][populate]=*&populate[SEO][populate]=*&populate[Gallery][populate]=*&populate[Villa_Facilities][sort]=Title"
    ).then((res) => res.json());

    return {
        props: {
            villasPageData,
            villasData,
        },
    };
}
