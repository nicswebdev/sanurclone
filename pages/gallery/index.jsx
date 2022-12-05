import React from "react";
import Hero from "../../components/Hero";
import Head from "next/head";
import Tabs from "../../components/Tabs";

const gallery = ({galleryPageData}) => {
    return (
        <>
            <Head>
                <title>{galleryPageData.data.attributes.Title}</title>
                <meta
                    name="description"
                    content={galleryPageData.data.attributes.Title}
                />
                <meta
                    name="keyword"
                    content={galleryPageData.data.attributes.Title}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    galleryPageData.data.attributes.Header_Image.data.attributes
                        .url
                }
            />

            <div className="text-center pt-4 sm:px-16 sm:pt-14">
                <h1 className="text-[#333333] pt-4 text-[33px]">
                    {galleryPageData.data.attributes.Title}
                </h1>
            </div>

            <div className="max-w-full px-0 md:px-24 pb-8">
                <Tabs galleryData={galleryPageData} />
            </div>
        </>
    );
};

export default gallery;

export async function getServerSideProps() {
    const galleryPageData = await fetch(
        "https://phpstack-841991-3041837.cloudwaysapps.com/api/gallery-page?populate[Header_Image][populate]=*&populate[Villa][populate]=*&populate[Wedding][populate]=*&populate[Restaurant][populate]=*&populate[Spa][populate]=*&populate[Surrounding][populate]=*"
    ).then((res) => res.json());

    return {
        props: {
            galleryPageData,
        },
    };
}
