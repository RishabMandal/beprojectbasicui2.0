"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ActivityDetectorComponent = () => {
  const router = useRouter();
  return (
    <div className="bg-[#25314f] h-full pt-5 flex flex-col justify-between">
      <div>
        <div className="mx-5 mb-5 rounded-xl bg-[#2c4075]">
          <div className="flex flex-row gap-1 items-center p-2">
            <div className="rounded-full bg-[#3f5ba9] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm">Suspicious Activity Detected</div>
              <div className="text-gray-500 text-xs">
                10:28:28 - 10:30:21 . 2m
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 border-t border-gray-500 items-center p-2">
            <div className="rounded-full bg-[#3f5ba9] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm">Suspicious Activity Detected</div>
              <div className="text-gray-500 text-xs">
                10:28:28 - 10:30:21 . 2m
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 border-t border-gray-500 items-center p-2">
            <div className="rounded-full bg-[#3f5ba9] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm">Suspicious Activity Detected</div>
              <div className="text-gray-500 text-xs">
                10:28:28 - 10:30:21 . 2m
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-1 border-t border-gray-500 items-center p-2">
            <div className="rounded-full bg-[#3f5ba9] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm">Suspicious Activity Detected</div>
              <div className="text-gray-500 text-xs">
                10:28:28 - 10:30:21 . 2m
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center cursor-pointer">
        <div className="border border-[#334c8e] bg-[#2c4075] p-3 hover:scale-110 duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 w-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          <div className="text-center text-sm pt-1">Share alert</div>
        </div>
        <div className="border border-[#334c8e] bg-[#2c4075] p-3 hover:scale-110 duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 w-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            />
          </svg>
          <div className="text-center text-sm pt-1">Call authority</div>
        </div>
        <div
          className="border border-[#334c8e] bg-[#2c4075] p-3 hover:scale-110 duration-200"
          onClick={() => router.push("/components/GenerateReport")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 w-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          <div className="text-center text-sm pt-1">Generate Report</div>
        </div>
        <div className="border border-[#334c8e] bg-[#2c4075] p-3 hover:scale-110 duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 w-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <div className="text-center text-sm pt-1">Dismiss violation</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetectorComponent;
