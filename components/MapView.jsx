"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "@/context";

const MapView = ({ mapView }) => {
  const { currentCameraData } = useContext(GlobalContext);
  return (
    <>
      {mapView ? (
        <div className="p-3 bg-[#141a2e] group relative">
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
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div>
              <div className="flex flex-row justify-start items-center">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" className="stroke-[#E83215] fill-[#E83215]">
                  <rect
                    width="20"
                    height="20"
                    x="10"
                    y="10"
                    rx="5"
                    ry="5"
                  />
                </svg>
                <div className="text-[#E83215]">Threat boundaries</div>
              </div>
              <div className="flex flex-row justify-start items-center -mt-3">
                <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" className="stroke-[#04fc00] fill-[#04fc00]">
                  <rect
                    width="20"
                    height="20"
                    x="10"
                    y="10"
                    rx="5"
                    ry="5"
                  />
                </svg>
                <div className="text-[#04fc00]">Camera co-ordinates</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 bg-[#141a2e] ">
          <video
            autoPlay
            loop
            src="/videos/radarVideo.mp4"
            className="w-full object-contain border border-[#2b4075]"
          />
        </div>
      )}
    </>
  );
};

export default MapView;
