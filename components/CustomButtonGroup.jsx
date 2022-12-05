import React from "react";
import {FaChevronLeft} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";
import {BsFillArrowLeftSquareFill} from "react-icons/bs";

const CustomButtonGroup = ({next, previous}) => {
    return (
        <div className="text-center flex gap-2 justify-center">
            <button
                className="bg-gray-50 text-[#333] p-3 border border-solid border-[#cecece]"
                onClick={previous}
            >
                <FaChevronLeft />
            </button>
            <button
                className="bg-gray-50 text-[#333] p-3 border border-solid border-[#cecece]"
                onClick={next}
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default CustomButtonGroup;
