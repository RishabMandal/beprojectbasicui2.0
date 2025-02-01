"use client";

import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const { data, setCurrentCameraData, alertCameraData } =
    useContext(GlobalContext);
  const [CameraView, setCameraView] = useState("Thermal");

  useEffect(() => {
    if (alertCameraData) {
    }
  }, [alertCameraData]);

  return (
    <div className="bg-[#1d2440] min-h-[95vh]">
      <div
        className={`flex-1 flex flex-wrap justify-start items-start p-5 gap-5 h-fit`}
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
        {data.slice(5, 11).map((item, index) => (
          <div key={index} className="relative min-w-[25vw] flex-1 h-fit">
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
            // onClick={() => setAlertCameraData(data[0])}
            className="text-center text-7xl cursor-pointer hover:scale-125 duration-200 pb-2"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
