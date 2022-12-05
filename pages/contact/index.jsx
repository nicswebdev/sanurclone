import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";

const reviews = ({contactPageData}) => {
    return (
        <>
            <Head>
                <title>{contactPageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={
                        contactPageData.data.attributes.SEO.SEO_Descriptions
                    }
                />
                <meta
                    name="keyword"
                    content={contactPageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero
                heroImg={
                    contactPageData.data.attributes.Header_Image.data.attributes
                        .url
                }
            />
            <div className="max-w-full px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-8 gap-4">
                    <div className="relative w-full h-[70vh]">
                        {parser(contactPageData.data.attributes.Map_Widget)}
                    </div>
                    <div className="flex flex-col justify-center p-16 bg-white h-[70vh]">
                        <h1 className="text-[#333] pb-4 text-[33px] line-left">
                            Contact Us
                        </h1>
                        <h1 className="text-[#333] py-4 text-[25px]">
                            {contactPageData.data.attributes.Propery_Text}
                        </h1>
                        {parser(contactPageData.data.attributes.Contact_Detail)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default reviews;

export async function getServerSideProps() {
    const contactPageData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/contact-page?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            contactPageData,
        },
    };
}
