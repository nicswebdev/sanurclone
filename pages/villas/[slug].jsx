import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BiBed} from "react-icons/bi";
import {BsArrowsFullscreen} from "react-icons/bs";

const details = ({villaDetailData}) => {
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
            <Hero />
            <div className="px-24 py-16">
                <h1 className="text-black py-2 text-2xl font-mrseaves line-left">
                    {villaDetailData.data[0].attributes.Title}
                </h1>
                <div className="mb-4">
                    <span>
                        Rate Start From:{" "}
                        {villaDetailData.data[0].attributes.Start_From} | Villa
                        Size: {villaDetailData.data[0].attributes.Size} | Bed
                        Type: {villaDetailData.data[0].attributes.Bed_Type} |
                        Occupancy:{" "}
                        {villaDetailData.data[0].attributes.Occupancy}
                    </span>
                </div>
                <div className="flex gap-8 my-8">
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
                    <button className="bg-[#A6631B] text-white p-3">
                        {
                            villaDetailData.data[0].attributes
                                .Check_Availability_Button_Text
                        }
                    </button>
                </div>
                <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                    {villaDetailData.data[0].attributes.Gallery.data.map(
                        (gallery, index) => {
                            if (index === 0) {
                                return (
                                    <>
                                        <div className="relative w-[677px] h-[451px] col-span-2 md:col-span-3 row-span-2">
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
                                        <div className="relative w-[215px] h-[217px]">
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
                <h1 className="text-black py-2 mt-8 text-2xl font-mrseaves line-left">
                    {villaDetailData.data[0].attributes.Villa_Facilities_Text}
                </h1>
                <div className="custom-ul pl-6">
                    {parser(villaDetailData.data[0].attributes.All_Facilities)}
                </div>
                <h1 className="text-black py-2 mt-8 text-2xl font-mrseaves line-left">
                    {villaDetailData.data[0].attributes.Villa_Benefits_Text}
                </h1>
                <div className="custom-ul pl-6">
                    {parser(villaDetailData.data[0].attributes.All_Benefits)}
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

    return {
        props: {
            villaDetailData,
        },
    };
}
