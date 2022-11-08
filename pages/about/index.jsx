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
            <Hero />
            <div className="text-center px-24 py-8">
                <h1 className="text-black py-4 text-2xl font-mrseaves">
                    {aboutPageData.data.attributes.Title}
                </h1>
                {parser(aboutPageData.data.attributes.About)}
            </div>
            <div className="max-w-full px-16 bg-[#cecece]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-8 gap-4">
                    <div className="flex flex-col justify-center p-16 bg-white h-[70vh]">
                        <h1 className="text-black py-4 text-2xl font-mrseaves">
                            {aboutPageData.data.attributes.Villa_Map_Title}
                        </h1>
                        {parser(
                            aboutPageData.data.attributes.Villa_Map_Descripitons
                        )}
                    </div>
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-2998353.cloudwaysapps.com//${aboutPageData.data.attributes.Villa_Map_Image.data.attributes.formats.medium.url}`}
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

export async function getStaticProps() {
    const aboutPageData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/about-page?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            aboutPageData,
        },
    };
}
