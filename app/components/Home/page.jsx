"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Modal } from "@mui/material";
// import { getBase64, ImagetoBase64 } from "react-image-base64";
// import base64ImageLoader from "base64-image-loader";
// import thermalCamera1 from "../../../assets/thermal/Camera 1.jpg";

const page = () => {
  const { data, setCurrentCameraData, alertCameraData, setAlertCameraData } =
    useContext(GlobalContext);
  const router = useRouter();
  const [CameraView, setCameraView] = useState("Thermal");

  //   const [deployeddata, setDeployeddata] = useState();

  //
  //   const [base64, setBase64] = useState("");
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result; // This is the base64 string

        // Send the base64 string via Axios
        axios({
          method: "POST",
          url: "https://detect.roboflow.com/drone-4uxky/1",
          params: {
            api_key: "NJIolqxzPmiYii3VJAJt",
          },
          data: {
            image: base64Image,
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error:", error.message);
          });
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };

      reader.readAsDataURL(selectedFile); // Convert to base64
    }
  };
  //   useEffect(() => {
  //     getBase64(thermalCamera1)
  //       .then((base64Image) => {
  //         // Send the base64 string via Axios
  //         return axios({
  //           method: "POST",
  //           url: "https://detect.roboflow.com/drone-4uxky/1",
  //           params: {
  //             api_key: "NJIolqxzPmiYii3VJAJt",
  //           },
  //           data: {
  //             image: base64Image,
  //           },
  //           headers: {
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         });
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error.message);
  //       });
  //   }, []);

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="outline-none"
      >
        <div className="w-[50vw] h-[50vh] top-5 mx-auto bg-opacity-10 flex flex-col items-center justify-center">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-16 stroke-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
          <div className="font-semibold text-2xl">
            Suspicious Activity Detected!
          </div>
          <div>Suspicious activity was detected in Zone 1, Block A</div>
          <div className="flex flex-row mt-5 gap-5">
            <button
              onClick={() => {
                setCurrentCameraData(data[0]);
                router.push("/components/DetailedVideoSection");
              }}
              className={`cursor-pointer bg-[#2b4075] border border-[#48599a] p-1 px-3 hover:scale-105 duration-200 rounded-lg`}
            >
              View Camera
            </button>
            <button className="bg-red-500 px-3 py-2 rounded-lg hover:bg-red-600 duration-200">
              Alert Border Patrol
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex h-[150vh]">
        <div
          ref={leftDivRef}
          style={{ minWidth: "100px", width: "33.33%" }} // Prevents the div from being too small
          className="bg-[#25314f]"
        >
          <div className="flex-1 bg-[#25314f] p-2 overflow-x-auto resize-x">
            {/* <input type="file" accept="image/*" onChange={handleFileChange} /> */}
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
                      {CameraView === "Night" && (
                        <Image
                          src={cam.nightImage}
                          alt="Cam"
                          className="w-[40%] rounded-lg"
                        />
                      )}
                      <div className="flex-1">
                        <div className="font-bold text-xl">
                          Zone {index + 1}
                        </div>
                        <div className="font-semibold">Block A</div>
                        <div className="text-gray-400">
                          Thermal Camera <br />
                          Time <br />
                          Location
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
          className="bg-[#334c8e] cursor-col-resize w-1 h-full"
          onMouseDown={handleMouseDown}
        ></div>
        <div
          ref={rightDivRef}
          className={`flex-1 flex flex-wrap justify-start items-start p-5 gap-5 h-fit`}
        >
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="relative min-w-[20vw] flex-1 h-fit">
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
              <div className="absolute z-30 top-2 left-2 bg-[#2b4075] text-white text-sm p-1 rounded">
                Camera ID: {item.id}
              </div>
            </div>
          ))}
          <div className="h-auto flex-1 min-w-[20vw] flex justify-center items-center bg-black rounded-lg">
            <div
              onClick={() => setAlertCameraData(data[0])}
              className="text-center text-7xl cursor-pointer hover:scale-125 duration-200"
            >
              +
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row">
      </div> */}
    </div>
  );
};

export default page;
