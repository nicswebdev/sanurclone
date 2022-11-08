import React, {useEffect, useState} from "react";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

function Footer() {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState(null);
    const [destination, setDestination] = useState(null);

    const [navigation, setNavigation] = useState(null);

    const getData = async () =>
        await fetch(
            "https://phpstack-841991-2983120.cloudwaysapps.com/api/footer?populate=*"
        )
            .then((res) => res.json())
            .then((data) => setData(data));

    const getLocation = async () =>
        await fetch(
            "https://phpstack-841991-2983120.cloudwaysapps.com/api/locations?populate=*"
        )
            .then((res) => res.json())
            .then((data) => setLocation(data));

    const getDestination = async () =>
        await fetch(
            "https://phpstack-841991-2983120.cloudwaysapps.com/api/destinations?populate=*"
        )
            .then((res) => res.json())
            .then((data) => setDestination(data));

    const getNav = async () =>
        await fetch(
            "https://phpstack-841991-2983120.cloudwaysapps.com/api/navigation/render/footer-navigation?type=TREE"
        )
            .then((res) => res.json())
            .then((data) => setNavigation(data));

    useEffect(() => {
        getData();
        getLocation();
        getDestination();
        getNav();
    }, []);

    return (
        <>
            <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 pb-2 border-b">
                <div className="p-2">
                    <ul>
                        <p className="text-gray-800 font-bold text-3xl pb-6">
                            {data && (
                                <img
                                    src={`https://phpstack-841991-2983120.cloudwaysapps.com/${data.data.attributes.FooterLogo.data.attributes.formats.thumbnail.url}`}
                                    alt="logo-kayumanis"
                                    className="logo-image"
                                />
                            )}
                        </p>
                    </ul>
                </div>
                <div className="p-2">
                    {data && (
                        <>
                            <ul className="pb-5">
                                <p className="text-gray-800 font-bold text-xs pb-2">
                                    {data.data.attributes.Address_Title}
                                </p>
                                <li className="footer text-gray-500 text-xs pb-2 font-semibold leading-5">
                                    {ReactHtmlParser(
                                        data.data.attributes.Address
                                    )}
                                </li>
                            </ul>
                            <ul>
                                <p className="text-gray-800 font-bold text-xs pb-2">
                                    Contact Us
                                </p>
                                <li className="footer text-gray-500 text-xs pb-2 font-semibold leading-5">
                                    {ReactHtmlParser(
                                        data.data.attributes.ContactUs
                                    )}
                                </li>
                            </ul>
                        </>
                    )}
                </div>
                <div className="p-2">
                    {location &&
                        location.data.map((item, index) => {
                            return (
                                <>
                                    <ul className="pb-5">
                                        <p
                                            key={index}
                                            className="text-gray-800 font-bold text-xs pb-2"
                                        >
                                            {item.attributes.Title}
                                        </p>
                                        {destination &&
                                            destination.data.map(
                                                (item2, index2) => {
                                                    if (
                                                        item.id ===
                                                        item2.attributes
                                                            .location.data.id
                                                    ) {
                                                        return (
                                                            <>
                                                                <li
                                                                    key={index2}
                                                                    className="text-gray-500 text-xs pb-2 font-semibold hover:text-[#A6631B] capitalize"
                                                                >
                                                                    <Link
                                                                        href={
                                                                            item2
                                                                                .attributes
                                                                                .Website
                                                                        }
                                                                        target="_blank"
                                                                    >
                                                                        {
                                                                            item2
                                                                                .attributes
                                                                                .Title
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            </>
                                                        );
                                                    }
                                                }
                                            )}
                                    </ul>
                                </>
                            );
                        })}
                </div>
                <div className="p-2">
                    <ul className="pb-5">
                        <p className="text-gray-800 font-bold text-xs pb-4">
                            {data && data.data.attributes.SubscriptionTitle}
                        </p>
                        <li className="text-gray-500 text-xs pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <form>
                                <input
                                    type="text"
                                    placeholder="E-mail Address"
                                    className="p-3"
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="p-3 bg-black text-white ml-1"
                                />
                            </form>
                        </li>
                    </ul>
                    <ul>
                        {navigation &&
                            navigation.map((item, index) => {
                                return (
                                    <>
                                        <li className="text-gray-500 text-xs pb-2 font-semibold hover:text-[#A6631B] cursor-pointer">
                                            <Link href={item.path}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start text-center p-1 pt-5 bg-gray-50">
                <div className="flex gap-6 pb-5 pl-20">
                    <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                    <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                    <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                    <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                </div>
            </div>
        </>
    );
}

export default Footer;
