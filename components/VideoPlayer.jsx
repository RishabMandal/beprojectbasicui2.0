"use client";

import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
const VideoPlayer = ({ currentCameraData, setCurrentCameraData }) => {
  const [CameraView, setCameraView] = useState("Thermal");
  const [MultiScreenView, setMultiScreenView] = useState(false);
  const [ActivateModel, setActivateModel] = useState(false);
  const { data } = useContext(GlobalContext);

  const handleCameraChange = (event) => {
    const selectedCameraId = parseInt(event.target.value);
    const selectedCamera = data?.find(
      (camera) => camera.id === selectedCameraId
    );
    // console.log(selectedCamera, selectedCameraId);
    setCurrentCameraData(selectedCamera);
  };

  // useEffect(() => {
  //   console.log(currentCameraData);
  // }, [currentCameraData]);

  return (
    <div className="p-5 bg-[#1d2440] min-h-full">
      <div className="flex flex-row justify-between items-center gap-2">
        <select
          className="flex-1 p-2 bg-[#2b4075] focus:outline-none rounded-lg cursor-pointer"
          value={currentCameraData?.id}
          onChange={handleCameraChange}
        >
          {data?.map((camera) => (
            <option key={camera.id} value={camera.id}>
              Camera {camera.id}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 cursor-pointer hover:scale-110 duration-200"
          onClick={() => setMultiScreenView(!MultiScreenView)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
      <div>
        {/* <iframe
          className="w-full h-[35vw] py-5"
          src="https://www.youtube.com/embed/k1CwNA5o018?mute=1"
          controls
        ></iframe> */}
        {!ActivateModel && !MultiScreenView && CameraView === "Normal" && (
          <Image
            src={currentCameraData?.normalImage}
            alt="Camera Feed Not Available"
            className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
          />
        )}
        {!ActivateModel &&
          !MultiScreenView &&
          CameraView === "Thermal" &&
          (currentCameraData?.video === false ? (
            <Image
              src={currentCameraData?.thermalImage}
              alt="Camera Feed Not Available"
              className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            />
          ) : (
            <video
              controls
              autoPlay
              loop
              // src="/videos/mehendi.mp4"
              // src="/videos/outputVideo.mp4"
              // src="/videos/outputVideoTrim.mp4"
              src={currentCameraData?.thermalImage}
              className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            >
              <p>
                Your browser does not support the video tag or the file format
                of the video.
              </p>
            </video>
          ))}
        {!ActivateModel &&
          !MultiScreenView &&
          CameraView === "Night" &&
          (currentCameraData?.video === false ? (
            <Image
              src={currentCameraData?.nightImage}
              alt="Camera Feed Not Available"
              className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            />
          ) : (
            <video
              controls
              autoPlay
              loop
              src={currentCameraData?.nightImage}
              className="w-full h-[75vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            >
              <p>
                Your browser does not support the video tag or the file format
                of the video.
              </p>
            </video>
          ))}
        {!ActivateModel && MultiScreenView && (
          <div className="flex flex-row max-w-[75vw]">
            <Image
              src={currentCameraData?.thermalImage}
              alt="Camera Feed Not Available"
              className="flex-1 h-[70vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            />
            <Image
              src={currentCameraData?.nightImage}
              alt="Camera Feed Not Available"
              className="flex-1 h-[70vh] border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            />
          </div>
        )}
        {ActivateModel && CameraView === "Thermal" && (
          <div className="flex flex-row max-w-full">
            <video
              controls
              autoPlay
              loop
              src={currentCameraData?.thermalImage}
              className="flex-1 w-1/2 h-auto border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            >
              <p>
                Your browser does not support the video tag or the file format
                of the video.
              </p>
            </video>
            <video
              controls
              autoPlay
              loop
              src={currentCameraData?.thermalImageAnnotated}
              className="flex-1 w-1/2 h-auto border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            >
              <p>
                Your browser does not support the video tag or the file format
                of the video.
              </p>
            </video>
          </div>
        )}
        {ActivateModel && CameraView === "Night" && (
          <div className="flex flex-row max-w-full">
            <video
              controls
              autoPlay
              loop
              src={currentCameraData?.nightImage}
              className="flex-1 w-1/2 h-auto border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            >
              <p>
                Your browser does not support the video tag or the file format
                of the video.
              </p>
            </video>
            <video
              controls
              autoPlay
              loop
              src={currentCameraData?.nightImageAnnotated}
              className="flex-1 w-1/2 h-auto border-2 border-[#334c8e] bg-black rounded-lg object-contain my-5"
            >
              <p>
                Your browser does not support the video tag or the file format
                of the video.
              </p>
            </video>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          className="size-9 h-full cursor-pointer bg-[#2b4075] border border-[#48599a] p-1 rounded-lg hover:scale-110 duration-200"
          onClick={() => setCurrentCameraData(data[currentCameraData.id - 2])}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          className="size-9 h-full -ml-1 cursor-pointer bg-[#2b4075] border border-[#48599a] p-1 rounded-lg hover:scale-110 duration-200"
          onClick={() => setCurrentCameraData(data[currentCameraData.id])}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>

        <div
          className={`cursor-pointer ${
            CameraView === "Normal" && "bg-[#2b4075]"
          } border border-[#48599a] p-1 ml-3 hover:scale-105 duration-200 px-3 rounded-lg`}
          onClick={() => setCameraView("Normal")}
        >
          Normal Vision
        </div>
        <div
          className={`cursor-pointer ${
            CameraView === "Thermal" && "bg-[#2b4075]"
          } border border-[#48599a] p-1 hover:scale-105 duration-200 px-3 rounded-lg`}
          onClick={() => setCameraView("Thermal")}
        >
          Thermal Vision
        </div>
        <div
          className={`cursor-pointer ${
            CameraView === "Night" && "bg-[#2b4075]"
          } border border-[#48599a] p-1 hover:scale-105 duration-200 px-3 rounded-lg`}
          onClick={() => setCameraView("Night")}
        >
          Night Vision
        </div>
        <div
          className={`cursor-pointer ${
            ActivateModel === true && "bg-[#2b4075]"
          } border border-[#48599a] p-1 hover:scale-105 duration-200 px-3 rounded-lg`}
          onClick={() => setActivateModel(!ActivateModel)}
        >
          Activate Model
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
