import React, {useEffect, useState} from "react";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import Image from "next/image";

function Footer() {
    const [data, setData] = useState(null);

    const [sitemap, setSitemap] = useState(null);
    const [footerNav, setFooterNav] = useState(null);

    const getData = async () =>
        await fetch(
            "https://phpstack-841991-2998353.cloudwaysapps.com/api/footer?populate=*"
        )
            .then((res) => res.json())
            .then((data) => setData(data));

    const getFooterNav = async () =>
        await fetch(
            "https://phpstack-841991-2998353.cloudwaysapps.com/api/navigation/render/footer-navigation?type=TREE"
        )
            .then((res) => res.json())
            .then((data) => setFooterNav(data));

    const getSitemapNav = async () =>
        await fetch(
            "https://phpstack-841991-2998353.cloudwaysapps.com/api/navigation/render/sitemap-navigation"
        )
            .then((res) => res.json())
            .then((data) => setSitemap(data));

    useEffect(() => {
        getData();
        getSitemapNav();
        getFooterNav();
    }, []);

    return (
        <>
            <div className="bg-[#f1f1f1] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 pb-2 border-b border-solid border-[#cecece]">
                <div className="px-1 py-2">
                    <div className="relative w-[260px] h-[120px] border-b border-solid border-[#dfdfdf]">
                        {data && (
                            <Image
                                src={`https://phpstack-841991-2998353.cloudwaysapps.com//${data.data.attributes.FooterLogo.data.attributes.url}`}
                                alt="logo-kayumanis"
                                fill
                                className="object-cover pb-8"
                            />
                        )}
                    </div>
                    <div>
                        {data && (
                            <>
                                <ul className="py-5">
                                    <p className="text-gray-800 font-bold text-xs pb-2">
                                        {data.data.attributes.Contact_Title}
                                    </p>
                                    <li className="footer text-[#666666] text-xs pb-2 leading-5">
                                        {ReactHtmlParser(
                                            data.data.attributes.Contact
                                        )}
                                    </li>
                                </ul>
                                <ul>
                                    <p className="text-gray-800 font-bold text-xs font-semibold pb-2">
                                        {data.data.attributes.Reservation_Title}
                                    </p>
                                    <li className="footer text-[#666666] text-xs pb-2 leading-5">
                                        {ReactHtmlParser(
                                            data.data.attributes.Reservation
                                        )}
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>

                <div className="px-1 py-2">
                    {footerNav &&
                        footerNav.map((item, index) => {
                            return (
                                <>
                                    <ul className="pb-5">
                                        <p
                                            key={index}
                                            className="text-gray-800 font-bold text-xs pb-2"
                                        >
                                            {item.title}
                                        </p>
                                        {item.items.length > 0 &&
                                            item.items.map((item2, index2) => {
                                                return (
                                                    <>
                                                        <li
                                                            key={index2}
                                                            className="text-[#666666] text-xs pb-2 hover:text-[#A6631B] capitalize"
                                                        >
                                                            <Link
                                                                href={
                                                                    item2.path
                                                                }
                                                                target="_blank"
                                                            >
                                                                {item2.title}
                                                            </Link>
                                                        </li>
                                                    </>
                                                );
                                            })}
                                    </ul>
                                </>
                            );
                        })}
                </div>
                <div className="px-1 py-2">
                    {data && (
                        <p className="text-gray-800 font-bold text-xs font-semibold pb-2">
                            {data.data.attributes.Sitemap_Title}
                        </p>
                    )}
                    <ul>
                        {sitemap &&
                            sitemap.map((item, index) => {
                                return (
                                    <>
                                        <li className="text-[#666666] text-xs pb-2 hover:text-[#A6631B] cursor-pointer">
                                            <Link href={`/${item.path}`}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}
                    </ul>
                </div>
                <div className="px-1 py-2">
                    <ul className="pb-5">
                        <p className="text-gray-800 font-bold text-xs pb-4">
                            {data && data.data.attributes.Subscription_Title}
                        </p>
                        <li className="text-gray-500 text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <form className="w-full">
                                <input
                                    type="text"
                                    placeholder="E-mail Address"
                                    className="p-3 w-[70%]"
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="w-[28%] bg-[#A6631B] text-white py-3 px-3 ml-1 hover:bg-[#915516]"
                                />
                            </form>
                        </li>
                    </ul>
                    <div className="w-full overflow-hidden">
                        {data &&
                            ReactHtmlParser(data.data.attributes.Map_Widget)}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center px-24 py-5 bg-[#f1f1f1] md:flex-row md:justify-between">
                <div className="flex gap-4 pb-5">
                    {data && (
                        <>
                            <div className="border border-solid border-[#333] p-3 rounded-full">
                                <Link
                                    href={data.data.attributes.Facebook}
                                    target="_blank"
                                >
                                    <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                                </Link>
                            </div>
                            <div className="border border-solid border-[#333] p-3 rounded-full">
                                <Link
                                    href={data.data.attributes.Twitter}
                                    target="_blank"
                                >
                                    <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                                </Link>
                            </div>
                            <div className="border border-solid border-[#333] p-3 rounded-full">
                                <Link
                                    href={data.data.attributes.Instagram}
                                    target="_blank"
                                >
                                    <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                                </Link>
                            </div>
                            <div className="border border-solid border-[#333] p-3 rounded-full">
                                <Link
                                    href={data.data.attributes.Youtube}
                                    target="_blank"
                                >
                                    <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <div>
                    <div className="relative w-[70px] h-[70px]">
                        {data && (
                            <Image
                                src={`https://phpstack-841991-2998353.cloudwaysapps.com//${data.data.attributes.Tripadvisor_Badge.data.attributes.url}`}
                                alt="logo-tripadvisor"
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
