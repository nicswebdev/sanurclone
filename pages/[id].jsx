import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import {SliderData} from "../components/SliderData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Card";
import Footer from "../components/Footer";
import DestinationsImage from "../components/DestinationsImage";
import ReactHtmlParser from "react-html-parser";
import RoomCard from "../components/RoomCard";
import OffersCard from "../components/OffersCard";
import ReviewCard from "../components/ReviewCard";
import Link from "next/link";

export default function Home({
    homepageData,
    villasData,
    experiencesData,
    offersData,
    reviewsData,
}) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 1,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    const responsive3 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    const responsive4 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 3,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 2,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };
    return (
        <div>
            <Head>
                <title>{homepageData.data.attributes.SEO.SEO_Title}</title>
                <meta
                    name="description"
                    content={homepageData.data.attributes.SEO.SEO_Descriptions}
                />
                <meta
                    name="keyword"
                    content={homepageData.data.attributes.SEO.SEO_Keyword}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <Slider slides={SliderData} /> */}
            {/* <Hero /> */}

            <div>
                <Carousel
                    responsive={responsive2}
                    infinite={true}
                    autoPlay={false}
                    autoPlaySpeed={3200}
                    showDots={false}
                    className=""
                >
                    {homepageData.data.attributes.Slider.map((image, index) => {
                        return (
                            <>
                                <div className="relative w-full h-screen">
                                    <Image
                                        src={`https://phpstack-841991-2998353.cloudwaysapps.com/${image.Image.data.attributes.formats.large.url}`}
                                        alt={
                                            image.Image.data.attributes
                                                .alternativeText
                                        }
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </>
                        );
                    })}
                </Carousel>
            </div>

            <div className="text-center px-16 py-16">
                <h1 className="text-black py-4 text-2xl font-mrseaves">
                    {
                        homepageData.data.attributes
                            .Content_Section_Kayumanis_Jimbaran.Title
                    }
                </h1>
                {ReactHtmlParser(
                    homepageData.data.attributes
                        .Content_Section_Kayumanis_Jimbaran.Content
                )}
            </div>

            <div className="max-w-full p-8 lg:pl-36 lg:pr-36">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {villasData.data.map((room, index) => {
                        return (
                            <div key={index}>
                                <RoomCard dataRoom={room} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="text-center pt-4 sm:px-16 sm:pt-2">
                <h1 className="text-black py-4 text-2xl font-mrseaves">
                    {homepageData.data.attributes.Package_Special_Offers_Title}
                </h1>
            </div>

            <div className="py-10 px-16">
                <div>
                    <Carousel
                        responsive={responsive3}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={3200}
                        showDots={false}
                    >
                        {offersData.data.map((item, index) => {
                            return (
                                <>
                                    <OffersCard packData={item} />
                                </>
                            );
                        })}
                    </Carousel>
                </div>
            </div>

            <div className="max-w-full pt-16 px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <Carousel
                            responsive={responsive2}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={3200}
                            showDots={false}
                            className=""
                        >
                            {homepageData.data.attributes.Content_Section_Kayumanis_Resto.Image.data.map(
                                (image, index) => {
                                    return (
                                        <>
                                            <div className="relative w-full h-[70vh]">
                                                <Image
                                                    src={`https://phpstack-841991-2998353.cloudwaysapps.com//${image.attributes.formats.large.url}`}
                                                    alt={
                                                        image.attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </Carousel>
                    </div>
                    <div className="flex flex-col justify-center p-16">
                        <h1 className="text-black py-4 text-2xl font-mrseaves">
                            {
                                homepageData.data.attributes
                                    .Content_Section_Kayumanis_Resto.Title
                            }
                        </h1>
                        {ReactHtmlParser(
                            homepageData.data.attributes
                                .Content_Section_Kayumanis_Resto.Content
                        )}
                        <button className="bg-[#A6631B] text-white p-2 mt-10 w-[120px] hover:bg-black">
                            Reserve
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-full px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col justify-center text-right p-16">
                        <h1 className="text-black py-4 text-2xl font-mrseaves">
                            {
                                homepageData.data.attributes
                                    .Content_Section_Kayumanis_Spa.Title
                            }
                        </h1>
                        {ReactHtmlParser(
                            homepageData.data.attributes
                                .Content_Section_Kayumanis_Spa.Content
                        )}
                        <button className="bg-[#A6631B] text-white p-2 mt-10 w-[120px] hover:bg-black">
                            Reserve
                        </button>
                    </div>
                    <div>
                        <Carousel
                            responsive={responsive2}
                            infinite={true}
                            autoPlay={false}
                            autoPlaySpeed={3200}
                            showDots={false}
                            className=""
                        >
                            {homepageData.data.attributes.Content_Section_Kayumanis_Spa.Image.data.map(
                                (image, index) => {
                                    return (
                                        <>
                                            <div className="relative w-full h-[70vh]">
                                                <Image
                                                    src={`https://phpstack-841991-2998353.cloudwaysapps.com//${image.attributes.formats.large.url}`}
                                                    alt={
                                                        image.attributes
                                                            .alternativeText
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    );
                                }
                            )}
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="max-w-full px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-2998353.cloudwaysapps.com//${homepageData.data.attributes.Content_Section_Wedding.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                homepageData.data.attributes
                                    .Content_Section_Wedding.Image.data[0]
                                    .attributes.alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-16">
                        <h1 className="text-black py-4 text-2xl font-mrseaves">
                            {
                                homepageData.data.attributes
                                    .Content_Section_Wedding.Title
                            }
                        </h1>
                        {ReactHtmlParser(
                            homepageData.data.attributes.Content_Section_Wedding
                                .Content
                        )}
                    </div>
                </div>
            </div>

            <div className="text-center pt-4 sm:px-16 sm:pt-16">
                <h1 className="text-black py-4 text-2xl font-mrseaves">
                    {
                        homepageData.data.attributes.Content_Section_Experience
                            .Title
                    }
                </h1>
            </div>

            <div className="py-10 px-16">
                <div>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={3200}
                        showDots={false}
                    >
                        {experiencesData.data.map((item, index) => {
                            return (
                                <>
                                    <Card dataEx={item} />
                                </>
                            );
                        })}
                    </Carousel>
                </div>
            </div>

            <div className="text-center bg-gray-50 px-16 pt-10 flex items-center justify-center">
                <div className="relative w-[240px] h-[80px]">
                    <Image
                        src={`https://phpstack-841991-2998353.cloudwaysapps.com/${homepageData.data.attributes.Review_Section_Logo.data.attributes.formats.thumbnail.url}`}
                        alt={
                            homepageData.data.attributes.Review_Section_Logo
                                .data.attributes.alternativeText
                        }
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="py-5 px-16 bg-gray-50">
                <div>
                    <Carousel
                        responsive={responsive4}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={3200}
                        showDots={false}
                    >
                        {reviewsData.data.map((item, index) => {
                            return (
                                <>
                                    <ReviewCard reviewData={item} />
                                </>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="py-2 px-16 bg-gray-50 flex justify-center">
                <Link href="/reviews">
                    <button className="bg-[#A6631B] text-white px-3 py-2 hover:bg-black">
                        {homepageData.data.attributes.Review_Read_More_Text}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const homepageData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/home-page?populate[Slider][populate]=*&populate[Content_Section_Kayumanis_Jimbaran][populate]=*&populate[Content_Section_Experience][populate]=*&populate[Content_Section_Wedding][populate]=*&populate[Content_Section_Kayumanis_Resto][populate]=*&populate[Content_Section_Kayumanis_Spa][populate]=*&populate[SEO][populate]=*&populate[Review_Section_Logo][populate]=*"
    ).then((res) => res.json());

    const villasData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/villas?populate[Villa_Facilities][populate]=*&populate[Facilities][populate]=*&populate[Featured_Image][populate]=*&populate[Benefits][populate]=*&populate[SEO][populate]=*&populate[Gallery][populate]=*&populate[Villa_Facilities][sort]=Title"
    ).then((res) => res.json());

    const experiencesData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/experiences?populate=*"
    ).then((res) => res.json());

    const offersData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/offers?populate=*"
    ).then((res) => res.json());

    const reviewsData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/reviews?populate=*&pagination[pageSize]=2"
    ).then((res) => res.json());

    // console.log(
    //     homepageData.data.attributes.Content_Section_Kayumanis_Jimbaran.Image
    //         .data[0].attributes
    // );
    return {
        props: {
            homepageData,
            villasData,
            experiencesData,
            offersData,
            reviewsData,
        },
    };
}
