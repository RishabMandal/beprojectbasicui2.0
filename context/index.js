"use client";

import { createContext, useState } from "react";
import thermalCamera1 from "../assets/thermal/Camera 1.jpg";
import thermalCamera2 from "../assets/thermal/Camera 2.jpg";
import thermalCamera3 from "../assets/thermal/Camera 3.jpg";
import thermalCamera4 from "../assets/thermal/Camera 4.jpg";
// import thermalVideo1 from "../assets/videos/outputVideo.mp4";
import nightCamera1 from "../assets/night/Camera 1.jpg";
import nightCamera2 from "../assets/night/Camera 2.jpg";
import nightCamera3 from "../assets/night/Camera 3.jpg";
import normalCamera1 from "../assets/normal/Camera 2.jpg";
import normalCamera2 from "../assets/normal/Camera 1.jpg";
import normalCamera3 from "../assets/normal/Camera 3.jpg";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [showNavModal, setShowNavModal] = useState(false);
  // const [isAuthUser, setIsAuthUser] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(true);
  const [email, setEmail] = useState();
  const [users, setUsers] = useState([
    { name: "Rishab", password: "1234" },
    { name: "Chaitanya", password: "5678" },
  ]);
  const [data, setData] = useState([
    {
      id: 1,
      video: false,
      normalImage: normalCamera1,
      thermalImage: thermalCamera1,
      nightImage: nightCamera1,
    },
    {
      id: 2,
      video: false,
      normalImage: normalCamera2,
      thermalImage: thermalCamera2,
      nightImage: nightCamera2,
    },
    {
      id: 3,
      video: false,
      normalImage: normalCamera3,
      thermalImage: thermalCamera3,
      nightImage: nightCamera3,
    },
    {
      id: 4,
      video: false,
      normalImage: "",
      thermalImage: thermalCamera4,
      nightImage: "",
    },
    {
      id: 5,
      video: true,
      normalImage: "",
      thermalImage: "/videos/outputVideoTrim.mp4",
      nightImage: "",
    },
    {
      id: 6,
      video: true,
      normalImage: "",
      thermalImage: "/videos/thermalVideoCamera6.mp4",
      thermalImageAnnotated: "/videos/thermalVideoAnnotatedCamera6.mp4",
      nightImage: "",
    },
  ]);
  const [currentCameraData, setCurrentCameraData] = useState({});
  const [alertCameraData, setAlertCameraData] = useState();
  return (
    <GlobalContext.Provider
      value={{
        showNavModal,
        setShowNavModal,
        isAuthUser,
        setIsAuthUser,
        email,
        setEmail,
        users,
        setUsers,
        data,
        setData,
        currentCameraData,
        setCurrentCameraData,
        alertCameraData,
        setAlertCameraData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
