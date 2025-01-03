"use client";

import ActivityDetectorComponent from "@/components/ActivityDetectorComponent";
import MapView from "@/components/MapView";
import VideoPlayer from "@/components/VideoPlayer";
import React, { useContext } from "react";
import { GlobalContext } from "@/context";

const page = () => {
  const { currentCameraData, setCurrentCameraData } = useContext(GlobalContext);
  return (
    <div className="bg-[#2f3b61]">
      <div className="flex flex-row">
        <div className="w-[70vw] min-h-[95vh]">
          <VideoPlayer currentCameraData={currentCameraData} setCurrentCameraData={setCurrentCameraData} />
        </div>
        <div className="w-[30vw] flex flex-col min-h-[95vh]">
          <div className="flex-1">
            <ActivityDetectorComponent />
          </div>
          <div className="">
            <MapView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
