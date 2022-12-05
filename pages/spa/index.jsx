import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BiBed} from "react-icons/bi";
import {BsArrowsFullscreen} from "react-icons/bs";

const details = ({spaDetailData}) => {
    return (
        <>
            <Head>
                <title>{spaDetailData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={spaDetailData.data.attributes.SEO.SEO_Descriptions}
                />
                <meta
                    name="keyword"
                    content={spaDetailData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    spaDetailData.data.attributes.Header_Image.data.attributes
                        .url
                }
            />
            <div className="text-center px-4 md:px-24 py-4 md:py-16">
                <h1 className="text-[#333] py-4 mb-8 text-[33px] line-center">
                    {spaDetailData.data.attributes.Title}
                </h1>

                {parser(spaDetailData.data.attributes.Content)}
            </div>

            <div className="max-w-full px-4 md:px-16 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${spaDetailData.data.attributes.Signature_Menu.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                spaDetailData.data.attributes.Signature_Menu
                                    .Image.data[0].attributes.alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-4 md:p-16">
                        <h1 className="text-[#333] py-4 text-[33px] line-left">
                            {spaDetailData.data.attributes.Signature_Menu.Title}
                        </h1>
                        {parser(
                            spaDetailData.data.attributes.Signature_Menu.Content
                        )}
                    </div>
                </div>
            </div>
            <div className="max-w-full px-4 md:px-16">
                <div className="flex gap-4 justify-center my-8">
                    <Link
                        href={spaDetailData.data.attributes.Reserve_Button_Link}
                    >
                        <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                            {spaDetailData.data.attributes.Reserve_Button_Text}
                        </button>
                    </Link>
                    <Link href={spaDetailData.data.attributes.Menu_Button_Link}>
                        <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                            {spaDetailData.data.attributes.Menu_Button_Text}
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps() {
    const spaDetailData = await fetch(
        `https://phpstack-841991-3041837.cloudwaysapps.com/api/spa-page?populate[Signature_Menu][populate]=*&populate[SEO][populate]=*&populate[Header_Image][populate]=*`
    ).then((res) => res.json());

    return {
        props: {
            spaDetailData,
        },
    };
}
