"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dialog, Modal } from "@mui/material";

const page = () => {
  const { data, setCurrentCameraData, alertCameraData, setAlertCameraData } =
    useContext(GlobalContext);
  const router = useRouter();
  const [CameraView, setCameraView] = useState("Thermal");

  // Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    // boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Resizable div
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const dividerRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const initialLeftWidth = leftDivRef.current.offsetWidth;

    const onMouseMove = (e) => {
      const newWidth = initialLeftWidth + (e.clientX - startX);
      leftDivRef.current.style.width = `${newWidth}px`;
      const newRightWidth = `calc(100% - ${
        newWidth + dividerRef.current.offsetWidth
      }px)`;
      rightDivRef.current.style.width = newRightWidth;
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  useEffect(() => {
    if (alertCameraData) handleOpen();
  }, [alertCameraData]);

  return (
    <div className="bg-[#1d2440] min-h-screen h-full text-white">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="outline-none"
        sx={{ outline: "none" }}
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-white">
          <div className="bg-[#2b4075] border-2 rounded-xl border-blue-600 flex flex-row gap-5 justify-between w-[60vw] mx-auto p-5">
            <div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-16 stroke-red-600 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div className="font-semibold text-2xl">
                Suspicious Activity Detected!
              </div>
              <div>
                Suspicious activity was detected in Zone{" "}
                {alertCameraData ? alertCameraData.id : "8"}, Block A
              </div>
              <button
                type="submit"
                onClick={() => {
                  setCurrentCameraData(alertCameraData);
                  router.push("/components/DetailedVideoSection");
                }}
                className="flex mb-2 mt-4 h-14 justify-center text-emerald-600 gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group"
              >
                View Camera
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  />
                </svg>
              </button>
              <button
                className="bg-white my-2 mx-auto block text-center w-48 rounded-2xl h-14 relative text-black text-lg font-semibold group"
                type="button"
                onClick={handleClose}
              >
                <div className="bg-red-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="25px"
                    width="25px"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#000000"
                    />
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#000000"
                    />
                  </svg>
                </div>
                <p className="translate-x-2">Go Back</p>
              </button>
              {/* <button className="border-2 border-red-600 bg-red-500 py-2 px-3 block rounded-xl font-semibold shadow-xl">
                View Camera
              </button>
              <button className="border-2 border-red-600 bg-red-500 py-2 px-3 block rounded-xl font-semibold shadow-xl">
                Cancel alert
              </button> */}
            </div>
            <video
              autoPlay
              loop
              className="border-2 w-[30vw] h-fit my-auto border-blue-600 bg-black duration-200 rounded-lg object-contain"
              src={alertCameraData?.thermalImageAnnotated}
            />
          </div>
        </div>
      </Dialog>
      <div className="flex h-full">
        <div
          ref={leftDivRef}
          style={{ minWidth: "100px" }} // Prevents the div from being too small
          className="bg-[#25314f] md:w-[33.33%]"
        >
          <div className="flex-1 bg-[#25314f] p-2 overflow-x-auto resize-x">
            <select
              className="flex-1 p-2 bg-[#2b4075] rounded-lg w-full focus:outline-none cursor-pointer"
              onChange={(e) => setCameraView(e.target.value)}
            >
              <option value="Thermal">Camera View: Thermal Vision</option>
              <option value="Normal">Camera View: Normal Vision</option>
              <option value="Night">Camera View: Night Vision</option>
            </select>
            <div className="px-2 bg-[#2b4075] rounded-lg w-full min-h-[100vh] mt-2">
              {data?.map((cam, index) => {
                const temperature =
                  Math.floor(Math.random() * (45 - 25 + 1)) + 25;
                const weatherConditions = [
                  "Sunny",
                  "Cloudy",
                  "Rainy",
                  "Fog",
                  "Windy",
                ];
                const weather =
                  weatherConditions[
                    Math.floor(Math.random() * weatherConditions.length)
                  ];
                return (
                  <div
                    key={index}
                    className="cursor-pointer pt-2"
                    onClick={() => {
                      setCurrentCameraData(cam);
                      router.push("/components/DetailedVideoSection");
                    }}
                  >
                    <div className="flex flex-row gap-5 pb-2">
                      {CameraView === "Thermal" &&
                        (cam.video === false ? (
                          <Image
                            src={cam.thermalImage}
                            alt="Cam"
                            className="w-[40%] rounded-lg"
                          />
                        ) : (
                          <video
                            // controls
                            src={cam.thermalImage}
                            alt="Cam"
                            className="w-[40%] rounded-lg"
                          />
                        ))}
                      {CameraView === "Normal" && (
                        <Image
                          src={cam.normalImage}
                          alt="Cam"
                          className="w-[40%] rounded-lg"
                        />
                      )}
                      {CameraView === "Night" &&
                        (cam.video === false ? (
                          <Image
                            src={cam.thermalImage}
                            alt="Cam"
                            className="w-[40%] rounded-lg"
                          />
                        ) : (
                          <video
                            // controls
                            src={cam.thermalImage}
                            alt="Cam"
                            className="w-[40%] rounded-lg"
                          />
                        ))}
                      <div className="flex-1">
                        <div className="font-bold text-xl">
                          Zone {index + 1}
                        </div>
                        <div className="font-semibold">Block A</div>
                        <div className="text-gray-400">
                          Temperature: {temperature}°C
                        </div>
                        <div className="text-gray-400">Weather: {weather}</div>
                        <div className="text-gray-400">
                          Longitude: {cam?.longitude}
                        </div>
                        <div className="text-gray-400">
                          Latitude: {cam?.latitude}
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          ref={dividerRef}
          className="bg-[#334c8e] cursor-col-resize w-1 h-full min-h-[350vh] hidden md:block"
          onMouseDown={handleMouseDown}
        ></div>
        <div
          ref={rightDivRef}
          className={`flex-1 hidden md:flex flex-wrap justify-start items-start p-5 gap-5 h-fit`}
        >
          {alertCameraData && (
            <div className="relative min-w-[20vw] flex-1 h-fit">
              {alertCameraData.video === false ? (
                <Image
                  src={
                    CameraView === "Thermal"
                      ? alertCameraData.thermalImage
                      : CameraView === "Normal"
                      ? alertCameraData.normalImage
                      : CameraView === "Night"
                      ? alertCameraData.nightImage
                      : null
                  }
                  alt="Camera Img"
                  onClick={() => {
                    setCurrentCameraData(alertCameraData);
                    router.push("/components/DetailedVideoSection");
                  }}
                  className="relative w-full h-auto border-2 border-red-600 bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105"
                />
              ) : (
                <video
                  // controls
                  loop
                  autoPlay
                  src={
                    CameraView === "Thermal"
                      ? alertCameraData.thermalImageAnnotated
                      : CameraView === "Normal"
                      ? alertCameraData.normalImage
                      : CameraView === "Night"
                      ? alertCameraData.nightImageAnnotated
                      : null
                  }
                  alt="Camera Img"
                  onClick={() => {
                    setCurrentCameraData(alertCameraData);
                    router.push("/components/DetailedVideoSection");
                  }}
                  className="relative w-full h-auto border-2 border-red-600 bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105"
                />
              )}
              <div className="absolute z-30 font-semibold top-2 left-2 bg-[#2b4075] text-white text-sm p-1 rounded">
                Zone {alertCameraData.id}
              </div>
            </div>
          )}
          {data.slice(5, 13).map((item, index) => (
            <div key={index} className="relative min-w-[20vw] flex-1 h-fit">
              {item.video === false ? (
                <Image
                  src={
                    CameraView === "Thermal"
                      ? item.thermalImage
                      : CameraView === "Normal"
                      ? item.normalImage
                      : CameraView === "Night"
                      ? item.nightImage
                      : null
                  }
                  alt="Camera Img"
                  onClick={() => {
                    setCurrentCameraData(item);
                    router.push("/components/DetailedVideoSection");
                  }}
                  className="relative w-full h-auto border-2 border-[#334c8e] bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105"
                />
              ) : (
                <video
                  // controls
                  loop
                  autoPlay
                  src={
                    CameraView === "Thermal"
                      ? item.thermalImage
                      : CameraView === "Normal"
                      ? item.normalImage
                      : CameraView === "Night"
                      ? item.nightImage
                      : null
                  }
                  alt="Camera Img"
                  onClick={() => {
                    setCurrentCameraData(item);
                    router.push("/components/DetailedVideoSection");
                  }}
                  className="relative w-full h-auto border-2 border-[#334c8e] bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105"
                />
              )}
              <div className="absolute z-30 font-semibold top-2 left-2 bg-[#2b4075] text-white text-sm p-1 rounded">
                Zone {item.id}
              </div>
            </div>
          ))}
          <div className="h-auto flex-1 min-w-[20vw] flex justify-center items-center bg-black rounded-lg">
            <div
              onClick={() => setAlertCameraData(data[0])}
              className="text-center text-7xl cursor-pointer hover:scale-125 duration-200 pb-2"
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
