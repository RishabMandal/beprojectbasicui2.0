"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import Calendar from "react-calendar"; // For the calendar
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    width: 150px;
    height: 150px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.55);
    border: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .loader::before {
    content: "";
    position: absolute;
    inset: 20px;
    background: transparent;
    border: 1px dashed#444;
    border-radius: 50%;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
      inset 5px 5px 35px rgba(0, 0, 0, 0.25);
  }

  .loader::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px dashed#444;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
      inset 5px 5px 35px rgba(0, 0, 0, 0.25);
  }

  .loader span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    animation: radar81 2s linear infinite;
    border-top: 1px dashed #fff;
  }

  .loader span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: seagreen;
    transform-origin: top left;
    transform: rotate(-55deg);
    filter: blur(30px) drop-shadow(20px 20px 20px seagreen);
  }

  @keyframes radar81 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const page = () => {
  // Example graph data
  const data = [
    { time: "10:00", Activity: 2 },
    { time: "10:15", Activity: 1 },
    { time: "10:30", Activity: 3 },
    { time: "10:45", Activity: 0 },
    { time: "11:00", Activity: 4 },
  ];

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box className="p-6 bg-[#25314f] min-h-screen">
      {Loading ? (
        <div className="flex justify-center items-center h-[90vh]">
          <Loader />
        </div>
      ) : (
        <>
          {/* Alerts Section */}
          <div className="mb-6 rounded-lg bg-[#2c4075] p-4 shadow-xl">
            <h6 className="text-lg font-semibold">
              Suspicious Activity Detected
            </h6>
            <div className="flex items-center mt-2">
              <div className="rounded-full bg-[#3f5ba9] p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>
              <div className="ml-2">
                <p className="text-sm">Suspicious Activity Detected</p>
                <p className="text-xs text-gray-400">
                  10:28:28 - 10:30:21 . 2m
                </p>
              </div>
            </div>
          </div>

          {/* Graph Section */}
          <Card className="mb-6">
            <CardContent>
              <Typography variant="h6" style={{ color: "#3f5ba9" }}>
                Suspicious Activity Trends
              </Typography>
              <div className="mt-4" style={{ height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Activity" stroke="#3f5ba9" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
};

export default page;
