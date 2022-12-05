import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BsFillQuestionCircleFill} from "react-icons/bs";
import OffersCard from "../../components/OffersCard";
import Carousel from "react-multi-carousel";
import PackageCard from "../../components/PackageCard";

const details = ({offerDetailData, offersData}) => {
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
                <title>
                    {offerDetailData.data[0].attributes.SEO.SEO_Title}
                </title>
                <meta
                    name="description"
                    content={
                        offerDetailData.data[0].attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={offerDetailData.data[0].attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    offerDetailData.data[0].attributes.Image.data.attributes.url
                }
            />
            <div className="px-4 md:px-24 py-4 md:py-16 md:grid md:grid-cols-3">
                <div className="col-span-2">
                    <h1 className="text-[#333] py-4 text-[33px] line-left">
                        {offerDetailData.data[0].attributes.Title}
                    </h1>

                    <div className="custom-sans offer-detail-inclusion pl-6">
                        {parser(offerDetailData.data[0].attributes.Inclusions)}
                    </div>

                    <h1 className="text-[#333] py-4 text-[33px] line-left">
                        {
                            offerDetailData.data[0].attributes
                                .Terms_Conditions_Text
                        }
                    </h1>
                    <div className="custom-sans offer-detail-inclusion pl-6">
                        {parser(
                            offerDetailData.data[0].attributes.Terms_Conditions
                        )}
                    </div>
                    <div className="flex gap-4 items-center my-8">
                        <Link
                            href={
                                offerDetailData.data[0].attributes.Book_Now_Link
                            }
                        >
                            <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                                {
                                    offerDetailData.data[0].attributes
                                        .Book_Now_Button_Text
                                }
                            </button>
                        </Link>

                        {/* <Link
                        href={`offer/${offerDetailData.data[0].attributes.Slug}`}
                    >
                        <span className="text-xs flex gap-1 items-center">
                            {
                                offerDetailData.data[0].attributes
                                    .Need_Assistance_Text
                            }
                            <BsFillQuestionCircleFill />
                        </span>
                    </Link> */}
                    </div>
                </div>
                <div className="py-4">
                    <div className="border border-solid border-[#000000] p-4">
                        <h1 className="text-[#333] pb-4 text-[24px]">
                            {
                                offerDetailData.data[0].attributes
                                    .Need_Assistance_Text
                            }
                        </h1>
                        {parser(
                            offerDetailData.data[0].attributes
                                .Need_Assistance_Descriptions
                        )}
                        <Link
                            href={
                                offerDetailData.data[0].attributes.Book_Now_Link
                            }
                        >
                            <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                                {
                                    offerDetailData.data[0].attributes
                                        .Send_Inquiry_Button_Text
                                }
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-full px-4 md:px-16 pb-8">
                <h1 className="text-[#333] text-[33px] line-left">
                    More Offers
                </h1>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={3200}
                    showDots={false}
                >
                    {offersData.data.map((item, index) => {
                        if (
                            item.attributes.Title !==
                            offerDetailData.data[0].attributes.Title
                        ) {
                            return (
                                <>
                                    <OffersCard key={index} packData={item} />
                                </>
                            );
                        }
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps({params}) {
    const slug = params.slug;

    const offerDetailData = await fetch(
        `https://phpstack-841991-3041837.cloudwaysapps.com/api/offers?filters[slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    const offersData = await fetch(
        "https://phpstack-841991-3041837.cloudwaysapps.com/api/offers?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            offerDetailData,
            offersData,
        },
    };
}
