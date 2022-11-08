import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BsFillQuestionCircleFill} from "react-icons/bs";

const offers = ({offersPageData, offersData}) => {
    return (
        <>
            <Head>
                <title>{offersPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={
                        offersPageData.data.attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={offersPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <div className="text-center px-24 py-16">
                <h1 className="text-black py-4 text-2xl font-mrseaves">
                    {offersPageData.data.attributes.Title}
                </h1>
                {parser(offersPageData.data.attributes.Content)}
            </div>
            {offersData.data.map((item, index) => {
                return (
                    <>
                        <div className="max-w-full px-16 mb-8" key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                <div className="relative w-full h-[60vh]">
                                    <Image
                                        src={`https://phpstack-841991-2998353.cloudwaysapps.com//${item.attributes.Image.data.attributes.formats.medium.url}`}
                                        alt={
                                            item.attributes.Image.data
                                                .attributes.alternativeText
                                        }
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-start px-8">
                                    <h1 className="text-black py-2 text-2xl font-mrseaves">
                                        {item.attributes.Title}
                                    </h1>
                                    <span className="mb-2">
                                        {item.attributes.Excerpt}
                                    </span>
                                    <div className="offer-inclusion pl-6">
                                        {parser(item.attributes.Inclusions)}
                                        <span className="text-xs">...</span>
                                    </div>
                                    <div className="flex gap-4 items-center my-4">
                                        <Link
                                            href={item.attributes.Book_Now_Link}
                                        >
                                            <button className="bg-[#FFFFFF] border border-solid border-[#cecece] py-2 px-3">
                                                {
                                                    item.attributes
                                                        .Book_Now_Button_Text
                                                }
                                            </button>
                                        </Link>
                                        <Link
                                            href={`offer/${item.attributes.Slug}`}
                                        >
                                            <button className="bg-[#A6631B] text-white py-2 px-3">
                                                {
                                                    item.attributes
                                                        .View_Detail_Button_Text
                                                }
                                            </button>
                                        </Link>
                                        <Link
                                            href={`offer/${item.attributes.Slug}`}
                                        >
                                            <span className="text-xs flex gap-1 items-center">
                                                {
                                                    item.attributes
                                                        .Need_Assistance_Text
                                                }
                                                <BsFillQuestionCircleFill />
                                            </span>
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

export default offers;

export async function getStaticProps() {
    const offersPageData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/offer-page?populate=*"
    ).then((res) => res.json());

    const offersData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/offers?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            offersPageData,
            offersData,
        },
    };
}
