"use client";

import { createContext, useState } from "react";
import thermalCamera1 from "../assets/thermal/Camera 1.jpg";
import thermalCamera2 from "../assets/thermal/Camera 2.jpg";
import thermalCamera3 from "../assets/thermal/Camera 3.jpg";
import thermalCamera4 from "../assets/thermal/Camera 4.jpg";
import nightCamera1 from "../assets/night/Camera 1.jpg";
import nightCamera2 from "../assets/night/Camera 2.jpg";
import nightCamera3 from "../assets/night/Camera 3.jpg";
import normalCamera1 from "../assets/normal/Camera 2.jpg";
import normalCamera2 from "../assets/normal/Camera 1.jpg";
import normalCamera3 from "../assets/normal/Camera 3.jpg";
import mapCamera5 from "../assets/maps/mapCamera5.jpg";
import mapCamera6 from "../assets/maps/mapCamera6.jpg";
import mapCamera7 from "../assets/maps/mapCamera7.jpg";
import mapCamera8 from "../assets/maps/mapCamera8.jpg";

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
      latitude: 27.187618,
      longitude: 69.591967,
    },
    {
      id: 2,
      video: false,
      normalImage: normalCamera2,
      thermalImage: thermalCamera2,
      nightImage: nightCamera2,
      latitude: 23.960556,
      longitude: 68.298732,
    },
    {
      id: 3,
      video: false,
      normalImage: normalCamera3,
      thermalImage: thermalCamera3,
      nightImage: nightCamera3,
      latitude: 29.537718,
      longitude: 70.462367,
    },
    {
      id: 4,
      video: false,
      normalImage: "",
      thermalImage: thermalCamera4,
      nightImage: "",
      latitude: 28.000218,
      longitude: 70.409267,
    },
    {
      id: 5,
      video: true,
      normalImage: "",
      thermalImage: "/videos/thermalVideoCamera5.mp4",
      thermalImageAnnotated: "/videos/thermalVideoAnnotatedCamera5.mp4",
      nightImage: "/videos/nightVideoCamera5.mp4",
      nightImageAnnotated: "/videos/nightVideoAnnotatedCamera5.mp4",
      mapSatelliteImage: mapCamera5,
      latitude: 23.272618,
      longitude: 70.462367,
    },
    {
      id: 6,
      video: true,
      normalImage: "",
      thermalImage: "/videos/thermalVideoCamera6.mp4",
      thermalImageAnnotated: "/videos/thermalVideoAnnotatedCamera6.mp4",
      nightImage: "/videos/nightVideoCamera6.mp4",
      nightImageAnnotated: "/videos/nightVideoAnnotatedCamera6.mp4",
      mapSatelliteImage: mapCamera6,
      latitude: 24.272618,
      longitude: 69.462367,
    },
    {
      id: 7,
      video: true,
      normalImage: "",
      thermalImage: "/videos/thermalVideoCamera7.mp4",
      thermalImageAnnotated: "/videos/thermalVideoAnnotatedCamera7.mp4",
      nightImage: "/videos/nightVideoCamera7.mp4",
      nightImageAnnotated: "/videos/nightVideoAnnotatedCamera7.mp4",
      mapSatelliteImage: mapCamera7,
      latitude: 24.167554,
      longitude: 70.010175,
    },
    {
      id: 8,
      video: true,
      normalImage: "",
      thermalImage: "/videos/thermalVideoCamera8.mp4",
      thermalImageAnnotated: "/videos/thermalVideoAnnotatedCamera8.mp4",
      nightImage: "/videos/nightVideoCamera8.mp4",
      nightImageAnnotated: "/videos/nightVideoAnnotatedCamera8.mp4",
      mapSatelliteImage: mapCamera8,
      latitude: 23.970267,
      longitude: 68.754941,
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
