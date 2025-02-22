"use client";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import flag from "../assets/maps/flag.jpg";

const Navbar = () => {
  const {
    isAuthUser,
    currentCameraData,
    data,
    alertCameraData,
    setAlertCameraData,
  } = useContext(GlobalContext);
  const router = useRouter();

  const handleKeyDown = (event) => {
    if (event.key === "A") {
      setAlertCameraData(data[7]);
    }
  };

  useEffect(() => {
    // Attach event listener for the 'keydown' event
    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return isAuthUser === true || isAuthUser === false ? (
    <div className={`${alertCameraData ? "bg-[#E83215]" : "bg-[#2f3b61]"} p-1 transition-colors duration-500`}>
      <div className="flex flex-row justify-between">
        <div className="font-bold pl-[0.35rem] text-xl flex flex-row w-fit items-center justify-start">
          <Image
            src={flag}
            alt="flag"
            className="h-[1rem] object-contain w-fit pr-2 waving-image"
          />
          <div
            onClick={() => router.push("/components/Home")}
            className="cursor-pointer inter-uniqueText font-bold"
          >
            Border Surveillance System
          </div>
        </div>
        {alertCameraData && (
          <div className="font-bold pl-[0.35rem] text-xl flex flex-row gap-1 w-fit items-center justify-start">
            <div>Alert!</div>
            <div>Threat found at Zone {alertCameraData?.id}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-6 ml-2 cursor-pointer"
              onClick={() =>
                alertCameraData
                  ? setAlertCameraData()
                  : setAlertCameraData(data[7])
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        )}
        {isAuthUser && (
          <div>
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-7 cursor-pointer mx-1 ${
                  !alertCameraData && "stroke-[#2ea1f1]"
                } py-1 px-1 hover:scale-125 duration-200`}
                onClick={() => router.push("/components/Home")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-7 cursor-pointer mx-1 ${
                  !alertCameraData && "stroke-[#2ea1f1]"
                } py-1 px-1 hover:scale-125 duration-200`}
                onClick={() => router.push("/components/TvView")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7 cursor-pointer mx-1 stroke-[#2ea1f1] py-1 px-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-7 cursor-pointer mx-1 ${
                  !alertCameraData && "stroke-[#2ea1f1]"
                } py-1 px-1 hover:scale-125 duration-200`}
                onClick={() =>
                  alertCameraData
                    ? setAlertCameraData()
                    : setAlertCameraData(data[7])
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-7 cursor-pointer mx-1 ${
                  !alertCameraData && "stroke-[#2ea1f1]"
                } py-1 px-1 hover:scale-125 duration-200`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`size-7 cursor-pointer mx-1 ${
                  !alertCameraData && "stroke-[#2ea1f1]"
                } py-1 px-1 hover:scale-125 duration-200`}
                onClick={() => router.push("/components/ChatBot")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Navbar;
