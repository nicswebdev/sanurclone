import React from "react";

const NavLinks = () => {
    const links = [
        {
            names: "Men",
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
            names: "Women",
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
            names: "Kids",
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
    ];

    return (
        <>
            {links.map((item, index) => {
                return (
                    <>
                        <div>
                            <div className="group">
                                <li className="text-white">{item.names}</li>
                                {item.submenu && (
                                    <div>
                                        <div className="absolute top-15 hidden group-hover:block hover:block">
                                            <div className="bg-white p-3.5">
                                                {item.sublinks.map(
                                                    (item2, index2) => {
                                                        return (
                                                            <>
                                                                <div>
                                                                    <li className="text-black">
                                                                        {
                                                                            item2.Head
                                                                        }
                                                                    </li>
                                                                    {item2.sublink.map(
                                                                        (
                                                                            item3,
                                                                            index3
                                                                        ) => {
                                                                            return (
                                                                                <>
                                                                                    <li className="text-black">
                                                                                        {
                                                                                            item3.names
                                                                                        }
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
        </>
    );
};

export default NavLinks;
