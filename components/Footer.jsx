import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2f3b61]">
      <div className="text-center py-5 font-semibold bg-[#2f3b61] text-lg flex flex-row justify-center opacity-0 hover:opacity-100">
        <div>Created with</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          // stroke="currentColor"
          className="size-6 mx-1 stroke-red-600 hover:scale-125 duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <div>
          by{" "}
          <a
            href="http://www.linkedin.com/in/rishabmandal"
            className="cursor-pointer hover:underline duration-200"
          >
            Rishab Mandal
          </a>{" "}
          and{" "}
          <a
            href="http://www.linkedin.com/in/chaitanya77kakade"
            className="cursor-pointer hover:underline duration-200"
          >
            Chaitanya Kakade
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
