import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import rating from "../../public/assets/5-rates.png";

const reviews = ({reviewsPageData, reviewsData}) => {
    return (
        <>
            <Head>
                <title>{reviewsPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={
                        reviewsPageData.data.attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={reviewsPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <div className="text-center px-16 pt-10 flex items-center justify-center">
                <div className="relative w-[300px] h-[80px]">
                    <Image
                        src={`https://phpstack-841991-2998353.cloudwaysapps.com/${reviewsPageData.data.attributes.Tripadvisor_Logo.data.attributes.formats.thumbnail.url}`}
                        alt={
                            reviewsPageData.data.attributes.Tripadvisor_Logo
                                .data.attributes.alternativeText
                        }
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto px-16 py-8">
                {reviewsData.data.map((item, index) => {
                    return (
                        <>
                            <div className="py-8 border-b border-solid border-[#cecece]">
                                <h1 className="text-xl font-medium font-mrseaves">
                                    {`"${item.attributes.Title}"`}
                                </h1>
                                <div className="flex mt-2 items-center gap-1 font-medium">
                                    {item.attributes.Name}
                                    <span>~</span>
                                    <div className="relative w-[80px] h-[40px]">
                                        <Image
                                            src={rating}
                                            alt="rating"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    {parser(item.attributes.Comment)}
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default reviews;

export async function getStaticProps() {
    const reviewsPageData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/review-page?populate=*"
    ).then((res) => res.json());

    const reviewsData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/reviews?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            reviewsPageData,
            reviewsData,
        },
    };
}
