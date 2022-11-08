import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import parser from "react-html-parser";
import rating from "../public/assets/5-rates.png";

function ReviewCard({reviewData}) {
    return (
        <div className="py-8 px-16 text-center">
            <h1 className="text-lg font-medium font-mrseaves">
                {`"${reviewData.attributes.Title}"`}
            </h1>
            <div className="flex mt-2 items-center gap-1 justify-center font-medium">
                {reviewData.attributes.Name}
                <span>~</span>
                <div className="relative w-[80px] h-[40px]">
                    <Image
                        src={rating}
                        alt="rating"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="mt-2 text-xs">
                {parser(reviewData.attributes.Comment)}
            </div>
        </div>
    );
}

export default ReviewCard;
