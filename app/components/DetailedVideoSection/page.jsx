"use client";

import ActivityDetectorComponent from "@/components/ActivityDetectorComponent";
import MapView from "@/components/MapView";
import VideoPlayer from "@/components/VideoPlayer";
import React, { useContext, useState } from "react";
import { GlobalContext } from "@/context";

const page = () => {
  const { currentCameraData, setCurrentCameraData } = useContext(GlobalContext);
  const [mapView, setMapView] = useState(true);
  return (
    <div className="bg-[#2f3b61]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[70vw] min-h-[95vh]">
          <VideoPlayer
            currentCameraData={currentCameraData}
            setCurrentCameraData={setCurrentCameraData}
          />
        </div>
        <div className="md:w-[30vw] flex flex-col min-h-[95vh]">
          <div className="flex-1">
            <ActivityDetectorComponent
              mapView={mapView}
              setMapView={setMapView}
            />
          </div>
          <div className="">
            <MapView mapView={mapView} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
