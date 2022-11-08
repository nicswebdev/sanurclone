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
            <Hero />
            <div className="px-24 py-16">
                <h1 className="text-black py-1 text-2xl font-mrseaves line-left">
                    {packageDetailData.data[0].attributes.Title}
                </h1>
                <h1 className="text-black text-lg mb-4 font-mrseaves">
                    {packageDetailData.data[0].attributes.Package_Rate}
                </h1>

                {parser(packageDetailData.data[0].attributes.Inclusions)}
                <div className="flex gap-4 items-center my-8">
                    <Link href={`/`}>
                        <button className="bg-[#A6631B] text-white py-2 px-3">
                            {
                                packageDetailData.data[0].attributes
                                    .Enquire_Now_Button_Text
                            }
                        </button>
                    </Link>
                </div>

                <h1 className="text-black py-2 mt-8 text-2xl font-mrseaves line-left">
                    {
                        packageDetailData.data[0].attributes
                            .Terms_Condisitons_Text
                    }
                </h1>
                {parser(packageDetailData.data[0].attributes.Terms_Conditions)}
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps({params}) {
    const slug = params.slug;

    const packageDetailData = await fetch(
        `https://phpstack-841991-2998353.cloudwaysapps.com/api/wedding-packages?filters[slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    return {
        props: {
            packageDetailData,
        },
    };
}
