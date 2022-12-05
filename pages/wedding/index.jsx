import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BiBed} from "react-icons/bi";
import {BsArrowsFullscreen} from "react-icons/bs";
import PackageCard from "../../components/PackageCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const details = ({weddingPageData, packagesData}) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
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
        <>
            <Head>
                <title>{weddingPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={
                        weddingPageData.data.attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={weddingPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    weddingPageData.data.attributes.Header_Image.data.attributes
                        .url
                }
            />
            <div className="text-center px-4 md:px-24 py-4 md:py-16">
                <h1 className="text-[#333] py-4 mb-8 text-[33px] line-center">
                    {weddingPageData.data.attributes.Title}
                </h1>

                {parser(weddingPageData.data.attributes.Content)}

                <div className="mt-8">
                    <Link
                        href={
                            weddingPageData.data.attributes.Reserve_Button_Link
                        }
                    >
                        <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                            {
                                weddingPageData.data.attributes
                                    .Reserve_Button_Text
                            }
                        </button>
                    </Link>
                </div>
            </div>

            <div className="max-w-full px-4 md:px-16 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${weddingPageData.data.attributes.Content_Section_1.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                weddingPageData.data.attributes
                                    .Content_Section_1.Image.data[0].attributes
                                    .alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-4 md:p-8">
                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                            {
                                weddingPageData.data.attributes
                                    .Content_Section_1.Title
                            }
                        </h1>
                        {parser(
                            weddingPageData.data.attributes.Content_Section_1
                                .Content
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-full px-4 md:px-16 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col justify-center p-4 md:p-8">
                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                            {
                                weddingPageData.data.attributes
                                    .Content_Section_2.Title
                            }
                        </h1>
                        {parser(
                            weddingPageData.data.attributes.Content_Section_2
                                .Content
                        )}
                    </div>
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${weddingPageData.data.attributes.Content_Section_2.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                weddingPageData.data.attributes
                                    .Content_Section_2.Image.data[0].attributes
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
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${weddingPageData.data.attributes.Content_Section_3.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                weddingPageData.data.attributes
                                    .Content_Section_3.Image.data[0].attributes
                                    .alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-4 md:p-8">
                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                            {
                                weddingPageData.data.attributes
                                    .Content_Section_3.Title
                            }
                        </h1>
                        {parser(
                            weddingPageData.data.attributes.Content_Section_3
                                .Content
                        )}
                        <Link
                            href={`${weddingPageData.data.attributes.Content_Section_3.Link}`}
                        >
                            <button className="bg-[#A6631B] text-white py-1 px-4 mt-10 w-[180px] self-end hover:bg-[#915516]">
                                {
                                    weddingPageData.data.attributes
                                        .Content_Section_3.Link_Text
                                }
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center px-4 md:px-24 pt-8">
                <h1 className="text-[#333] py-4 mb-8 text-[33px] line-center">
                    {weddingPageData.data.attributes.Wedding_Package_Title}
                </h1>
            </div>

            <div className="max-w-full px-4 md:px-16 pb-8">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={3200}
                    showDots={false}
                >
                    {packagesData.data.map((item, index) => {
                        return (
                            <>
                                <PackageCard packData={item} />
                            </>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps() {
    const weddingPageData = await fetch(
        `https://phpstack-841991-3041837.cloudwaysapps.com/api/wedding-page?populate[SEO][populate]=*&populate[Content_Section_1][populate]=*&populate[Content_Section_2][populate]=*&populate[Content_Section_3][populate]=*&populate[Header_Image][populate]=*`
    ).then((res) => res.json());

    const packagesData = await fetch(
        `https://phpstack-841991-3041837.cloudwaysapps.com/api/wedding-packages?populate=*`
    ).then((res) => res.json());

    return {
        props: {
            weddingPageData,
            packagesData,
        },
    };
}
