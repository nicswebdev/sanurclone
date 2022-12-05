import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BsFillQuestionCircleFill} from "react-icons/bs";

const details = ({expDetailData}) => {
    return (
        <>
            <Head>
                <title>{expDetailData.data[0].attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={
                        expDetailData.data[0].attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={expDetailData.data[0].attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    expDetailData.data[0].attributes.Image.data.attributes.url
                }
            />
            <div className="px-4 md:px-24 py-4 md:py-16">
                <h1 className="text-[#333] py-4 text-[33px] line-left">
                    {expDetailData.data[0].attributes.Title}
                </h1>

                <div className="custom-sans offer-detail-inclusion">
                    {parser(expDetailData.data[0].attributes.Descriptions)}
                </div>
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps({params}) {
    const slug = params.slug;

    const expDetailData = await fetch(
        `https://phpstack-841991-3041837.cloudwaysapps.com/api/experiences?filters[slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    return {
        props: {
            expDetailData,
        },
    };
}
