import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BiBed} from "react-icons/bi";
import {BsArrowsFullscreen} from "react-icons/bs";

const details = ({expPageData, expsData}) => {
    return (
        <>
            <Head>
                <title>{expPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={expPageData.data.attributes.SEO.SEO_Descriptions}
                />
                <meta
                    name="keyword"
                    content={expPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    expPageData.data.attributes.Header_Image.data.attributes.url
                }
            />
            <div className="text-center px-4 md:px-24 py-4 md:py-16">
                <h1 className="text-[#333] py-4 mb-8 text-[33px]">
                    {expPageData.data.attributes.Title}
                </h1>

                {parser(expPageData.data.attributes.Content)}
            </div>

            {expsData.data.map((item, index) => {
                if (index % 2 === 0) {
                    return (
                        <>
                            <div className="max-w-full px-4 md:px-16 py-4 md:py-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                    <div className="relative w-full h-[70vh]">
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
                                    <div className="flex flex-col justify-center p-4 md:p-8">
                                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                                            {item.attributes.Title}
                                        </h1>
                                        {parser(item.attributes.Descriptions)}
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                } else {
                    return (
                        <>
                            <div className="max-w-full px-4 md:px-16 py-4 md:py-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                    <div className="flex flex-col justify-center p-4 md:p-8">
                                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                                            {item.attributes.Title}
                                        </h1>
                                        {parser(item.attributes.Descriptions)}
                                    </div>
                                    <div className="relative w-full h-[70vh]">
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
                                </div>
                            </div>
                        </>
                    );
                }
            })}
        </>
    );
};

export default details;

export async function getServerSideProps() {
    const expPageData = await fetch(
        `https://phpstack-841991-2998353.cloudwaysapps.com/api/experience-page?populate=*`
    ).then((res) => res.json());

    const expsData = await fetch(
        `https://phpstack-841991-2998353.cloudwaysapps.com/api/experiences?populate=*`
    ).then((res) => res.json());

    return {
        props: {
            expPageData,
            expsData,
        },
    };
}
