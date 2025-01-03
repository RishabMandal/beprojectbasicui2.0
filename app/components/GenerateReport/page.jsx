"use client";

import { GlobalContext } from "@/context";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import React, { useContext, useState } from "react";

const page = () => {
  const { currentCameraData } = useContext(GlobalContext);
  const [weatherData, setWeatherData] = useState(null);
  const [severityLevel, setSeverityLevel] = useState("high");
  //   const [severityLevel, setSeverityLevel] = useState("medium");
  const [report, setReport] = useState(
    "A Drone was detected with a temperature of 37°C at 02:00 AM. The weather was Clear, and recent activity shows: No activity detected in the last 24 hours. Historical patterns indicate Previous intrusions detected between 01:00 AM and 03:00 AM near the location Sector A, 500 meters from Border Post 12. The current risk level is High. It is recommended to Increase surveillance,Alert patrols,Deploy deterrents,Log and Monitor."
  );
  const [location, setLocation] = useState({
    lat: "18.93523182276795",
    lon: "72.77755582685234",
  });
  //   const [loading, setLoading] = useState(true);
  //   const downloadPDF = () => {
  //     const input = document.getElementById("weather-data");
  //     html2canvas(input).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, "PNG", 0, 0);
  //       pdf.save("report.pdf");
  //     });
  //   };
  const downloadPDF = () => {
    const doc = new jsPDF();
    const content = document.getElementById("weather-data");

    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190; // Set your desired width
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      doc.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight); // Add some padding on the edges

      // Check if the content height exceeds the page limit
      const pageHeight = doc.internal.pageSize.height;
      let heightLeft = imgHeight - pageHeight;

      let position = 0;

      // Add new pages as needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight; // Subtract the height used
      }

      doc.save("report.pdf");
    });
  };

  const getSeverityColor = (level) => {
    if (level == "high") return "bg-red-500"; // High severity
    if (level == "medium") return "bg-yellow-500"; // Moderate severity
    return "bg-green-500"; // Low severity
  };

  //   if (loading) return <div>Loading...</div>;
  return (
    <div className="bg-[#1d2440]">
      <div className="p-5 min-h-screen flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Detailed Report</h1>
        <div
          id="weather-data"
          className="bg-white p-5 text-black rounded-lg shadow-lg w-full max-w-xl"
        >
          <h2 className="text-xl font-semibold">Location Coordinates</h2>
          <p>
            <span className="font-semibold">Latitude:</span> {location.lat}
          </p>
          <p>
            <span className="font-semibold">Longitude:</span> {location.lon}
          </p>
          <h2 className="text-xl font-semibold mt-4">Weather Details</h2>
          <>
            <p>
              <span className="font-semibold">Temperature:</span> 37°C
            </p>
            <p>
              <span className="font-semibold">Weather:</span> Fog
            </p>
            <p>
              <span className="font-semibold">Humidity:</span> 75%
            </p>
          </>
          <h2 className="text-xl font-semibold mt-4">Severity level</h2>
          <span className="font-semibold">
            {severityLevel.toLocaleUpperCase()}
          </span>
          <div className="flex flex-row w-full">
            <div
              className={`mt-2 h-2 flex-1 rounded ${getSeverityColor(
                severityLevel
              )}`}
            ></div>
            <div
              className={`mt-2 h-2 flex-1 rounded ${getSeverityColor(
                severityLevel
              )}`}
            ></div>
            <div
              className={`mt-2 h-2 flex-1 rounded ${getSeverityColor(
                severityLevel
              )}`}
            ></div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Report</h2>
          <div>{report}</div>
          <h2 className="text-xl font-semibold my-4">Camera Snapshots</h2>
          <div className="flex flex-row gap-3">
            <Image
              src={currentCameraData?.thermalImage}
              alt="Thermal Camera Data"
              className="object-contain flex-1 max-w-[150px] h-auto" // Set max width and auto height
            />
            <Image
              src={currentCameraData?.nightImage}
              alt="Night Camera Data"
              className="object-contain flex-1 max-w-[150px] h-auto" // Set max width and auto height
            />
          </div>
        </div>
        <button
          onClick={downloadPDF}
          className={`cursor-pointer bg-[#2b4075] border border-[#48599a] py-1 px-3 hover:scale-105 duration-200 mt-5 rounded-lg`}
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default page;
