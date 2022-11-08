import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";
import {BsFillQuestionCircleFill} from "react-icons/bs";

const details = ({offerDetailData}) => {
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
            <Hero />
            <div className="px-24 py-16">
                <h1 className="text-black py-2 text-2xl font-mrseaves line-left">
                    {offerDetailData.data[0].attributes.Title}
                </h1>

                {parser(offerDetailData.data[0].attributes.Inclusions)}
                <div className="flex gap-4 items-center my-4">
                    <Link
                        href={offerDetailData.data[0].attributes.Book_Now_Link}
                    >
                        <button className="bg-[#A6631B] text-white py-2 px-3">
                            {
                                offerDetailData.data[0].attributes
                                    .Book_Now_Button_Text
                            }
                        </button>
                    </Link>

                    <Link
                        href={`offer/${offerDetailData.data[0].attributes.Slug}`}
                    >
                        <span className="text-xs flex gap-1 items-center">
                            {
                                offerDetailData.data[0].attributes
                                    .Need_Assistance_Text
                            }
                            <BsFillQuestionCircleFill />
                        </span>
                    </Link>
                </div>

                <h1 className="text-black py-2 text-2xl font-mrseaves line-left">
                    {offerDetailData.data[0].attributes.Terms_Conditions_Text}
                </h1>
                {parser(offerDetailData.data[0].attributes.Terms_Conditions)}
            </div>
        </>
    );
};

export default details;

export async function getServerSideProps({params}) {
    const slug = params.slug;

    const offerDetailData = await fetch(
        `https://phpstack-841991-2998353.cloudwaysapps.com/api/offers?filters[slug][$eq]=${slug}&populate=*`
    ).then((res) => res.json());

    return {
        props: {
            offerDetailData,
        },
    };
}
