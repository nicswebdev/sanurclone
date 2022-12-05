import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";

const reviews = ({aboutPageData}) => {
    return (
        <>
            <Head>
                <title>{aboutPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={aboutPageData.data.attributes.SEO.SEO_Descriptions}
                />
                <meta
                    name="keyword"
                    content={aboutPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    aboutPageData.data.attributes.Header_Image.data.attributes
                        .url
                }
            />
            <div className="text-center px-4 md:px-24 py-8">
                <h1 className="text-[#333] py-4 text-[24px] md:text-[33px]">
                    {aboutPageData.data.attributes.Title}
                </h1>
                {parser(aboutPageData.data.attributes.About)}
            </div>
            <div className="max-w-full px-2 md:px-16 bg-[#cecece]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 md:p-8 gap-4">
                    <div className="flex flex-col justify-center p-4 md:p-16 bg-white h-[85vh]">
                        <h1 className="text-[#333] py-4 text-[33px]">
                            {aboutPageData.data.attributes.Villa_Map_Title}
                        </h1>
                        {parser(
                            aboutPageData.data.attributes.Villa_Map_Descripitons
                        )}
                    </div>
                    <div className="relative w-full h-[85vh]">
                        <Image
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${aboutPageData.data.attributes.Villa_Map_Image.data.attributes.formats.medium.url}`}
                            alt={
                                aboutPageData.data.attributes.Villa_Map_Image
                                    .data.attributes.alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default reviews;

export async function getServerSideProps() {
    const aboutPageData = await fetch(
        "https://phpstack-841991-3041837.cloudwaysapps.com/api/about-page?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            aboutPageData,
        },
    };
}
