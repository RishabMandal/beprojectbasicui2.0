"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "@/context";

const MapView = () => {
  const { currentCameraData } = useContext(GlobalContext);
  return (
    <div className="p-3 bg-[#141a2e] ">
      {currentCameraData?.mapSatelliteImage ? (
        <>
          <Image
            src={currentCameraData.mapSatelliteImage}
            className="w-full object-contain border border-[#2b4075]"
          />
          <div className="font-semibold text-sm pt-2">
            Latitude: {currentCameraData?.latitude}
          </div>
          <div className="font-semibold text-sm">
            Longitude: {currentCameraData?.longitude}
          </div>
        </>
      ) : (
        <img
          src="https://www.shutterstock.com/image-illustration/gps-location-scanning-interface-sim-600nw-1888986520.jpg"
          alt=""
          className="w-full object-contain border border-[#2b4075]"
        />
      )}
    </div>
  );
};

export default MapView;
