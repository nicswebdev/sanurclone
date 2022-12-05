import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BsFillQuestionCircleFill} from "react-icons/bs";

const details = ({packageDetailData}) => {
    return (
        <>
            <Head>
                <title>
                    {packageDetailData.data[0].attributes.SEO.SEO_Title}
                </title>
                <meta
                    name="description"
                    content={
                        packageDetailData.data[0].attributes.SEO
                            .SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={
                        packageDetailData.data[0].attributes.SEO.SEO_Keyword
                    }
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    packageDetailData.data[0].attributes.Image.data.attributes
                        .url
                }
            />
            <div className="px-4 md:px-24 py-4 md:py-16">
                <h1 className="text-[#333] py-4 text-[33px] line-left">
                    {packageDetailData.data[0].attributes.Title}
                </h1>
                <h1 className="text-black text-lg mb-4 font-mrseaves">
                    {packageDetailData.data[0].attributes.Package_Rate}
                </h1>

                <div className="custom-sans offer-detail-inclusion pl-6">
                    {parser(packageDetailData.data[0].attributes.Inclusions)}
                </div>

                <h1 className="text-[#333] py-4 mt-8 text-[33px] line-left">
                    {
                        packageDetailData.data[0].attributes
                            .Terms_Condisitons_Text
                    }
                </h1>
                <div className="custom-sans offer-detail-inclusion pl-6">
                    {parser(
                        packageDetailData.data[0].attributes.Terms_Conditions
                    )}
                </div>
                <div className="flex gap-4 items-center my-8">
                    <Link href={`/`}>
                        <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                            {
                                packageDetailData.data[0].attributes
                                    .Enquire_Now_Button_Text
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

    const packageDetailData = await fetch(
        `https://phpstack-841991-3041837.cloudwaysapps.com/api/wedding-packages?filters[slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    return {
        props: {
            packageDetailData,
        },
    };
}
