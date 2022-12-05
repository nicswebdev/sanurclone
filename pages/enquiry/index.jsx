import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Hero from "../../components/Hero";
import parser from "react-html-parser";

const Enquiry = ({contactPageData}) => {
    const [type, setType] = useState("room");

    const onValueChange = (event) => {
        setType(event.target.value);
    };

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
                <h1 className="text-[#333] pb-4 text-[33px] text-center line-center">
                    Enquiry Form
                </h1>

                <div className="container mx-auto">
                    <div className="flex justify-center px-6 my-6">
                        <div className="w-full lg:w-8/12">
                            <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <h1 className="text-[#333] pb-0 text-base line-left">
                                        What Enquiry do you prefer?
                                    </h1>
                                    <div className="flex gap-4 mb-8">
                                        <div className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                value="room"
                                                name="form_type"
                                                checked={type === "room"}
                                                onChange={onValueChange}
                                            />
                                            <span className="text-sm sans">
                                                Request Accommodation
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                value="table"
                                                name="form_type"
                                                checked={type === "table"}
                                                onChange={onValueChange}
                                            />
                                            <span className="text-sm sans">
                                                Table Reservation
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                value="spa"
                                                name="form_type"
                                                checked={type === "spa"}
                                                onChange={onValueChange}
                                            />
                                            <span className="text-sm sans">
                                                Spa Enquiry
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <input
                                                type="radio"
                                                value="others"
                                                name="form_type"
                                                checked={type === "others"}
                                                onChange={onValueChange}
                                            />
                                            <span className="text-sm sans">
                                                Other
                                            </span>
                                        </div>
                                    </div>
                                    <h1 className="text-[#333] pb-0 text-base line-left">
                                        Please tell us your contact info
                                    </h1>
                                    <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                className="block mb-2 text-sm text-[#333]"
                                                for="fullName"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                id="fullName"
                                                type="text"
                                                placeholder="Full Name"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="block mb-2 text-sm text-[#333]"
                                                for="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="text"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                className="block mb-2 text-sm text-[#333]"
                                                for="country"
                                            >
                                                Country
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                id="country"
                                                type="text"
                                                placeholder="Country"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="block mb-2 text-sm text-[#333]"
                                                for="phone"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                id="phone"
                                                type="text"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>

                                    <h1 className="text-[#333] pb-0 mt-8 text-base line-left">
                                        Your Comments, Requests or Questions
                                    </h1>

                                    <div className="mb-4 md:grid md:grid-cols-1 gap-4">
                                        <div>
                                            <label
                                                className="block mb-2 text-sm text-[#333]"
                                                for="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                id="message"
                                                placeholder="Message"
                                                rows={5}
                                            />
                                        </div>
                                    </div>

                                    {type === "room" && (
                                        <>
                                            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="room"
                                                    >
                                                        Room Type
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="room"
                                                        type="text"
                                                        placeholder="Room Type"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="Quantity"
                                                    >
                                                        Quantity
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="Quantity"
                                                        type="text"
                                                        placeholder="Quantity"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="day-in"
                                                    >
                                                        Day-In
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="day-in"
                                                        type="text"
                                                        placeholder="01-01-2023"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="day-out"
                                                    >
                                                        Day-Out
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="day-out"
                                                        type="text"
                                                        placeholder="02-01-2023"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 md:grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="adult"
                                                    >
                                                        No. of Adult
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="adult"
                                                        type="text"
                                                        placeholder="2"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="child"
                                                    >
                                                        No. of Children
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="child"
                                                        type="text"
                                                        placeholder="0"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="infant"
                                                    >
                                                        No. of Infant
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="infant"
                                                        type="text"
                                                        placeholder="0"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {type === "table" && (
                                        <>
                                            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="venue"
                                                    >
                                                        Venue
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="venue"
                                                        type="text"
                                                        placeholder="Venue"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="person"
                                                    >
                                                        How Many Person
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="person"
                                                        type="text"
                                                        placeholder="2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="date"
                                                    >
                                                        Date
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="date"
                                                        type="text"
                                                        placeholder="Date"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="time"
                                                    >
                                                        Time
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="time"
                                                        type="text"
                                                        placeholder="Time"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {type === "spa" && (
                                        <>
                                            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="treatment"
                                                    >
                                                        Treatment
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="treatment"
                                                        type="text"
                                                        placeholder="Treatment"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="adult-spa"
                                                    >
                                                        No. of Adult
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="adult-spa"
                                                        type="text"
                                                        placeholder="2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="date-in"
                                                    >
                                                        Date-in
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="date-in"
                                                        type="text"
                                                        placeholder="Date"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="arrival"
                                                    >
                                                        Arrival Time
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="arrival"
                                                        type="text"
                                                        placeholder="Time"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-4 md:grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block mb-2 text-sm text-[#333]"
                                                        for="hours"
                                                    >
                                                        How Many Hour(s)
                                                    </label>
                                                    <input
                                                        className="w-full px-3 py-2 text-sm leading-tight text-[#333] border border-[#333] appearance-none focus:outline-none focus:shadow-outline"
                                                        id="hours"
                                                        type="text"
                                                        placeholder="Hour(s)"
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="mt-8 text-center">
                                        <button
                                            className="w-[200px] px-4 py-2 font-bold text-white bg-[#A6631B] hover:bg-[#915516] focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Enquiry;

export async function getStaticProps() {
    const contactPageData = await fetch(
        "https://phpstack-841991-2998353.cloudwaysapps.com/api/contact-page?populate=*"
    ).then((res) => res.json());

    return {
        props: {
            contactPageData,
        },
    };
}
