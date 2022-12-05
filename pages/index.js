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
import CustomButtonGroup from "../components/CustomButtonGroup";
import PlayButton from "../public/assets/play-button.png";
import PauseButton from "../public/assets/pause-button.png";
const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";

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

    const [play, setPlay] = useState({
        playing: false,
    });

    const {playing} = play;

    const videoHandler = () => {
        setPlay({...play, playing: !play.playing});
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

            {playing ? (
                <div className="player-wrapper flex justify-center items-center">
                    <ReactPlayer
                        url={homepageData.data.attributes.Video_URL}
                        config={{
                            youtube: {
                                playerVars: {showinfo: 0, rel: 0},
                            },
                        }}
                        playing={playing}
                        onPause={videoHandler}
                        width="100%"
                        height="100%"
                        className="react-player top-linear"
                    />
                    <Image
                        onClick={videoHandler}
                        src={PauseButton}
                        alt="Play Button"
                        className="play-btn w-12 z-[1] hover:animate-bounce"
                        style={{top: "40%"}}
                    />
                </div>
            ) : (
                <div className="relative flex justify-center items-center">
                    <Carousel
                        responsive={responsive2}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={3200}
                        showDots={false}
                        customTransition="opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)"
                        transitionDuration={300}
                        className="top-linear w-full h-screen"
                    >
                        {homepageData.data.attributes.Slider.map(
                            (image, index) => {
                                return (
                                    <>
                                        <div
                                            key={index}
                                            className="relative w-full h-screen flex justify-center items-center"
                                        >
                                            <Image
                                                src={`https://phpstack-841991-3041837.cloudwaysapps.com/${image.Image.data.attributes.url}`}
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
                            }
                        )}
                    </Carousel>
                    <Image
                        onClick={videoHandler}
                        src={PlayButton}
                        alt="Play Button"
                        className="play-btn w-20 z-[1] hover:animate-bounce"
                    />
                </div>
            )}

            <div className="text-center px-4 py-4 md:px-16 md:py-16">
                <h1 className="text-[#333] py-4 text-[33px]">
                    {
                        homepageData.data.attributes
                            .Content_Section_Kayumanis_Sanur.Title
                    }
                </h1>
                {ReactHtmlParser(
                    homepageData.data.attributes.Content_Section_Kayumanis_Sanur
                        .Content
                )}
            </div>

            <div className="max-w-full p-4 pl-2 pr-2 md:pl-28 md:pr-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    {villasData.data.map((room, index) => {
                        return (
                            <div key={index}>
                                <RoomCard key={index} dataRoom={room} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="text-center pt-4 sm:px-16 sm:pt-2">
                <h1 className="text-[#333333] py-4 text-[33px]">
                    {homepageData.data.attributes.Package_Special_Offers_Title}
                </h1>
            </div>

            <div className="py-4 px-2 md:py-10 md:px-16">
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
                                    <OffersCard key={index} packData={item} />
                                </>
                            );
                        })}
                    </Carousel>
                    <div className="text-center mt-5">
                        <Link href={`/offer`}>
                            <span className="text-[#333] text-sm border-b border-solid border-[#333]">
                                View All Offers
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-full px-4 pt-16 md:px-16">
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
                                            <div
                                                key={index}
                                                className="relative w-full h-[70vh]"
                                            >
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${image.attributes.formats.large.url}`}
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
                    <div className="flex flex-col justify-center p-2 md:p-16">
                        <h1 className="text-[#333333] py-4 text-[33px]">
                            {
                                homepageData.data.attributes
                                    .Content_Section_Kayumanis_Resto.Title
                            }
                        </h1>
                        {ReactHtmlParser(
                            homepageData.data.attributes
                                .Content_Section_Kayumanis_Resto.Content
                        )}
                        <Link
                            href={`${homepageData.data.attributes.Content_Section_Kayumanis_Resto.Link}`}
                        >
                            <button className="bg-[#A6631B] text-white py-1 px-4 mt-10 w-[120px] hover:bg-[#915516]">
                                {
                                    homepageData.data.attributes
                                        .Content_Section_Kayumanis_Resto
                                        .Link_Text
                                }
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-full px-4 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col justify-center text-right p-2 md:p-16">
                        <h1 className="text-[#333333] py-4 text-[33px]">
                            {
                                homepageData.data.attributes
                                    .Content_Section_Kayumanis_Spa.Title
                            }
                        </h1>
                        {ReactHtmlParser(
                            homepageData.data.attributes
                                .Content_Section_Kayumanis_Spa.Content
                        )}
                        <Link
                            href={`${homepageData.data.attributes.Content_Section_Kayumanis_Spa.Link}`}
                        >
                            <button className="bg-[#A6631B] text-white py-1 px-4 mt-10 w-[120px] self-end hover:bg-[#915516]">
                                {
                                    homepageData.data.attributes
                                        .Content_Section_Kayumanis_Spa.Link_Text
                                }
                            </button>
                        </Link>
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
                                            <div
                                                key={index}
                                                className="relative w-full h-[70vh]"
                                            >
                                                <Image
                                                    src={`https://phpstack-841991-3041837.cloudwaysapps.com/${image.attributes.formats.large.url}`}
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

            <div className="max-w-full px-4 pt-8 md:px-16 md:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="relative w-full h-[70vh]">
                        <Image
                            src={`https://phpstack-841991-3041837.cloudwaysapps.com/${homepageData.data.attributes.Content_Section_Wedding.Image.data[0].attributes.formats.medium.url}`}
                            alt={
                                homepageData.data.attributes
                                    .Content_Section_Wedding.Image.data[0]
                                    .attributes.alternativeText
                            }
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center p-2 md:p-16">
                        <h1 className="text-[#333333] py-4 text-[33px]">
                            {
                                homepageData.data.attributes
                                    .Content_Section_Wedding.Title
                            }
                        </h1>
                        {ReactHtmlParser(
                            homepageData.data.attributes.Content_Section_Wedding
                                .Content
                        )}
                        <Link
                            href={`${homepageData.data.attributes.Content_Section_Wedding.Link}`}
                        >
                            <button className="bg-[#A6631B] text-white py-1 px-4 mt-10 w-[120px] self-end hover:bg-[#915516]">
                                {
                                    homepageData.data.attributes
                                        .Content_Section_Wedding.Link_Text
                                }
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center pt-4 sm:px-16 sm:pt-16">
                <h1 className="text-[#333333] py-4 text-[33px]">
                    {
                        homepageData.data.attributes.Content_Section_Experience
                            .Title
                    }
                </h1>
            </div>

            <div className=" px-2 md:py-10 md:px-16">
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
                                    <Card key={index} dataEx={item} />
                                </>
                            );
                        })}
                    </Carousel>
                </div>
            </div>

            <div className="text-center bg-gray-50 px-2 md:px-16 pt-10 flex items-center justify-center">
                <div className="relative w-[240px] h-[110px]">
                    <Image
                        src={`https://phpstack-841991-3041837.cloudwaysapps.com/${homepageData.data.attributes.Review_Section_Logo.data.attributes.formats.thumbnail.url}`}
                        alt={
                            homepageData.data.attributes.Review_Section_Logo
                                .data.attributes.alternativeText
                        }
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="py-5 px-2 md:px-16 bg-gray-50">
                <div>
                    <Carousel
                        responsive={responsive4}
                        arrows={false}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={3200}
                        showDots={false}
                        customButtonGroup={<CustomButtonGroup />}
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside
                        className="font-light"
                    >
                        {reviewsData.data.map((item, index) => {
                            return (
                                <>
                                    <ReviewCard key={index} reviewData={item} />
                                </>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <div className="py-6 px-16 bg-gray-50 flex justify-center">
                <Link href="/reviews">
                    <button className="bg-[#A6631B] text-white py-1 px-4 hover:bg-[#915516]">
                        {homepageData.data.attributes.Review_Read_More_Text}
                    </button>
                </Link>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const homepageData = await fetch(
        "https://phpstack-841991-3041837.cloudwaysapps.com/api/home-page?populate[Slider][populate]=*&populate[Content_Section_Kayumanis_Sanur][populate]=*&populate[Content_Section_Experience][populate]=*&populate[Content_Section_Wedding][populate]=*&populate[Content_Section_Kayumanis_Resto][populate]=*&populate[Content_Section_Kayumanis_Spa][populate]=*&populate[SEO][populate]=*&populate[Review_Section_Logo][populate]=*"
    ).then((res) => res.json());

    const villasData = await fetch(
        "https://phpstack-841991-3041837.cloudwaysapps.com/api/villas?populate[Villa_Facilities][populate]=*&populate[Facilities][populate]=*&populate[Featured_Image][populate]=*&populate[Benefits][populate]=*&populate[SEO][populate]=*&populate[Gallery][populate]=*&populate[Villa_Facilities][sort]=Title"
    ).then((res) => res.json());

    const experiencesData = await fetch(
        "https://phpstack-841991-3041837.cloudwaysapps.com/api/experiences?populate=*"
    ).then((res) => res.json());

    const offersData = await fetch(
        "https://phpstack-841991-3041837.cloudwaysapps.com/api/offers?populate=*"
    ).then((res) => res.json());

    const reviewsData = await fetch(
        "https://phpstack-841991-3041837.cloudwaysapps.com/api/reviews?populate=*&pagination[pageSize]=2"
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
