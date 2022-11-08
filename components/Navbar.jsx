import Link from "next/link";
import React, {useEffect, useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const links = [
        {
            names: "Destinations",
            submenu: true,
            sublinks: [
                {
                    Head: "TopWear",
                    sublink: [
                        {
                            names: "T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Casual T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Formal T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Underground T-Shirt",
                            link: "/",
                        },
                    ],
                },
            ],
        },
        {
            names: "Spa",
            submenu: true,
            sublinks: [
                {
                    Head: "TopWear",
                    sublink: [
                        {
                            names: "T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Casual T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Formal T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Underground T-Shirt",
                            link: "/",
                        },
                    ],
                },
            ],
        },
        {
            names: "Dining",
            submenu: true,
            sublinks: [
                {
                    Head: "TopWear",
                    sublink: [
                        {
                            names: "T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Casual T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Formal T-Shirt",
                            link: "/",
                        },
                        {
                            names: "Underground T-Shirt",
                            link: "/",
                        },
                    ],
                },
            ],
        },
        {
            names: "Wedding",
        },
        {
            names: "Special Promotion",
        },
    ];

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState("transparent");
    const [textColor, setTextColor] = useState("white");
    const [logo, setLogo] = useState("");

    const handleNav = () => {
        setNav(!nav);
    };

    const [data, setData] = useState(null);
    const [navigation, setNavigation] = useState(null);

    const getData = async () =>
        await fetch(
            "https://phpstack-841991-2998353.cloudwaysapps.com/api/header?populate=*"
        )
            .then((res) => res.json())
            .then((data) => setData(data));

    const getNav = async () =>
        await fetch(
            "https://phpstack-841991-2998353.cloudwaysapps.com/api/navigation/render/1?type=TREE"
        )
            .then((res) => res.json())
            .then((data) => setNavigation(data));

    useEffect(() => {
        getData();
        getNav();
    }, []);

    useEffect(() => {
        if (data) {
            setLogo(
                data.data.attributes.Logo.data.attributes.formats.thumbnail.url
            );
        }
    }, [data]);

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY > 90) {
                setColor("#FFFFFF");
                setTextColor("#000000");
                if (data) {
                    setLogo(
                        data.data.attributes.SecondLogo.data.attributes.formats
                            .thumbnail.url
                    );
                }
            } else {
                setColor("transparent");
                setTextColor("#FFFFFF");
                if (data) {
                    setLogo(
                        data.data.attributes.Logo.data.attributes.formats
                            .thumbnail.url
                    );
                }
            }
        };

        window.addEventListener("scroll", changeColor);
    }, [data]);

    return (
        <div
            style={{backgroundColor: `${color}`}}
            className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
        >
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
                <Link href="/">
                    {data && (
                        <img
                            src={`https://phpstack-841991-2998353.cloudwaysapps.com/${logo}`}
                            alt="logo-kayumanis"
                            className="logo-image"
                        />
                    )}
                </Link>

                <ul
                    style={{color: `${textColor}`}}
                    className="hidden sm:flex items-center gap-7"
                >
                    {navigation &&
                        navigation.map((item, index) => {
                            return (
                                <>
                                    <div>
                                        <div className="group">
                                            <li
                                                style={{color: `${textColor}`}}
                                                className="py-4 custom-link uppercase"
                                            >
                                                <Link href={item.path}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                            {item.items.length > 0 && (
                                                <div>
                                                    <div className="absolute top-15 hidden group-hover:block hover:block">
                                                        <div className="bg-white p-3.5">
                                                            {item.items.map(
                                                                (
                                                                    item2,
                                                                    index2
                                                                ) => {
                                                                    return (
                                                                        <>
                                                                            <div>
                                                                                <li className="text-black pb-2 border-b border-[#A6631B]">
                                                                                    {
                                                                                        item2.title
                                                                                    }
                                                                                </li>
                                                                                {item2
                                                                                    .items
                                                                                    .length >
                                                                                    0 &&
                                                                                    item2.items.map(
                                                                                        (
                                                                                            item3,
                                                                                            index3
                                                                                        ) => {
                                                                                            return (
                                                                                                <>
                                                                                                    <li className="custom-link text-black p-2 hover:bg-[#f1f1f1]">
                                                                                                        <Link
                                                                                                            href={
                                                                                                                item3.path
                                                                                                            }
                                                                                                            target="_blank"
                                                                                                        >
                                                                                                            {
                                                                                                                item3.title
                                                                                                            }
                                                                                                        </Link>
                                                                                                    </li>
                                                                                                </>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                            </div>
                                                                        </>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </ul>

                <div className="sm:block hidden">
                    <button
                        className="p-3 border-2"
                        style={{color: `${textColor}`}}
                    >
                        BOOK NOW
                    </button>
                </div>

                <div onClick={handleNav} className="block sm:hidden z-10">
                    {nav ? (
                        <AiOutlineClose size={20} />
                    ) : (
                        <AiOutlineMenu
                            size={20}
                            style={{color: `${textColor}`}}
                        />
                    )}
                </div>
                <div
                    className={
                        nav
                            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                    }
                >
                    <ul>
                        <li
                            onClick={handleNav}
                            className="p-4 text-4xl hover:text-gray-500"
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <NavLinks />
                        <div className="">
                            <button>BOOK NOW</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
