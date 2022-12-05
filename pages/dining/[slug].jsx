import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BiBed} from "react-icons/bi";
import {BsArrowsFullscreen} from "react-icons/bs";

const details = ({diningDetailData}) => {
    return (
        <>
            <Head>
                <title>
                    {diningDetailData.data[0].attributes.SEO.SEO_Title}
                </title>
                <meta
                    name="description"
                    content={
                        diningDetailData.data[0].attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={
                        diningDetailData.data[0].attributes.SEO.SEO_Keyword
                    }
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    diningDetailData.data[0].attributes.Image.data.attributes
                        .url
                }
            />
            <div className="text-center px-4 md:px-24 py-4 md:py-16">
                <h1 className="text-[#333] py-4 mb-8 text-[33px]">
                    {diningDetailData.data[0].attributes.Title}
                </h1>

                {parser(diningDetailData.data[0].attributes.Descriptions)}
            </div>

            <div className="max-w-full px-4 md:px-16 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col justify-center p-4 md:p-16">
                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                            {
                                diningDetailData.data[0].attributes
                                    .Content_Section_1.Title
                            }
                        </h1>
                        {parser(
                            diningDetailData.data[0].attributes
                                .Content_Section_1.Content
                        )}
                    </div>
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${diningDetailData.data[0].attributes.Content_Section_1.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                diningDetailData.data[0].attributes
                                    .Content_Section_1.Image.data[0].attributes
                                    .alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-full px-4 md:px-16 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${diningDetailData.data[0].attributes.Content_Section_2.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                diningDetailData.data[0].attributes
                                    .Content_Section_2.Image.data[0].attributes
                                    .alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-4 md:p-16">
                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                            {
                                diningDetailData.data[0].attributes
                                    .Content_Section_2.Title
                            }
                        </h1>
                        {parser(
                            diningDetailData.data[0].attributes
                                .Content_Section_2.Content
                        )}
                    </div>
                </div>
            </div>
            <div className="max-w-full px-4 md:px-16 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col justify-center p-4 md:p-16">
                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                            {
                                diningDetailData.data[0].attributes
                                    .Content_Section_3.Title
                            }
                        </h1>
                        {parser(
                            diningDetailData.data[0].attributes
                                .Content_Section_3.Content
                        )}
                    </div>
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${diningDetailData.data[0].attributes.Content_Section_3.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                diningDetailData.data[0].attributes
                                    .Content_Section_3.Image.data[0].attributes
                                    .alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-full px-16">
                <div className="flex gap-4 justify-center my-8">
                    <Link
                        href={
                            diningDetailData.data[0].attributes
                                .Reserve_Button_Link
                        }
                    >
                        <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                            {
                                diningDetailData.data[0].attributes
                                    .Reserve_Button_Text
                            }
                        </button>
                    </Link>
                    <Link
                        href={
                            diningDetailData.data[0].attributes
                                .More_Details_Button_Link
                        }
                    >
                        <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                            {
                                diningDetailData.data[0].attributes
                                    .More_Details_Button_Text
                            }
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps({params}) {
    const slug = params.slug;

    const diningDetailData = await fetch(
        `https://phpstack-841991-3041837.cloudwaysapps.com/api/restaurants?filters[slug][$eq]=${slug}&populate[Content_Section_1][populate]=*&populate[Content_Section_2][populate]=*&populate[Content_Section_3][populate]=*&populate[SEO][populate]=*&populate[Image][populate]=*`
    ).then((res) => res.json());

    console.log(diningDetailData);
    return {
        props: {
            diningDetailData,
        },
    };
}
