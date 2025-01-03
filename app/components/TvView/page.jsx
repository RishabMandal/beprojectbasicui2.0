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
    <div className="bg-[#1d2440]">
      <div
        className={`flex-1 flex flex-wrap justify-start items-start p-5 gap-5 h-fit`}
      >
        {data.slice(0, 3).map((item, index) => (
          <div key={index} className="relative min-w-[25vw] flex-1 h-fit">
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
              className={`relative w-full h-auto border-2 ${
                alertCameraData?.id === item?.id
                  ? "border-4 border-red-600"
                  : "border-[#334c8e]"
              } bg-black duration-200 rounded-lg object-contain cursor-pointer hover:scale-105`}
            />
            <div className="absolute z-30 top-2 left-2 bg-[#2b4075] text-white text-sm p-1 rounded">
              Camera ID: {item.id}
            </div>
          </div>
        ))}
        <div className="h-auto flex-1 min-w-[20vw] flex justify-center items-center bg-black rounded-lg">
          <div
            // onClick={() => setAlertCameraData(data[0])}
            className="text-center text-7xl cursor-pointer hover:scale-125 duration-200"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
