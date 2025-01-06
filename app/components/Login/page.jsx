"use client";

import React, { useContext, useRef } from "react";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";

const page = () => {
  const { users, setUsers, setIsAuthUser } = useContext(GlobalContext);
  //   console.log(users);
  const currentUsername = useRef();
  const currentPassword = useRef();

  const router = useRouter();

  return (
    <div className="bg-[#1d2440] min-h-screen text-black p-5">
      <div className="bg-gradient-to-r from-green-400 to-indigo-500 hover:p-3 duration-300 w-fit mx-auto rounded-xl hover:shadow-lg transition-transform transform hover:scale-95">
        <div className="bg-black p-6 rounded-lg">
          <form className="flex flex-col gap-4 px-8 py-4 bg-black rounded-xl transition-all">
            <p
              id="heading"
              className="text-center text-white text-2xl my-8 font-semibold"
            >
              Login
            </p>
            <div className="flex items-center justify-center gap-2 border-2 border-gray-800 rounded-xl p-4 bg-black text-white shadow-inner">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height={16}
                width={16}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input
                type="text"
                ref={currentUsername}
                className="bg-transparent border-none outline-none w-full text-gray-300"
                placeholder="Username"
                autoComplete="off"
              />
            </div>
            <div className="flex items-center justify-center gap-2 border-2 border-gray-800 rounded-xl p-4 bg-black text-white shadow-inner">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height={16}
                width={16}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              <input
                type="password"
                ref={currentPassword}
                className="bg-transparent border-none outline-none w-full text-gray-300"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => {
                  if (
                    users.find(
                      (user) => user.name === currentUsername.current.value
                    )
                  ) {
                    alert("Login Success");
                    setIsAuthUser(true);
                    // redirect("/components/Home");
                    router.push("/components/Home");
                  }
                }}
                className="px-4 py-2 rounded-md bg-gray-800 text-white transition-all hover:bg-gray-900"
              >
                Login
              </button>
              <button
                onClick={() => {
                  if (
                    users.find(
                      (user) => user.name === currentUsername.current.value
                    )
                  ) {
                    alert("Login Success");
                    setIsAuthUser(true);
                    // redirect("/components/Home");
                    router.push("/components/Home");
                  }
                }}
                className="px-6 py-2 rounded-md bg-gray-800 text-white transition-all hover:bg-gray-900"
              >
                Sign Up
              </button>
            </div>
            <button className="px-4 py-2 rounded-md bg-gray-800 text-white mt-6 transition-all hover:bg-red-600">
              Forgot Password
            </button>
          </form>
        </div>
      </div>
      {/* <div className="flex flex-row">
        <div className="flex-1">Image</div>
        <div className="flex-1">
          <div className="text-3xl font-semibold text-center py-8">
            Welcome to login system
          </div>
          <div className="font-semibold">Username</div>
          <input
            type="text"
            ref={currentUsername}
            placeholder="Enter your username"
            className="border border-black text-[#2f3b61] focus:border-[#2f3b61] rounded-md shadow-lg w-full mb-5 text-xl py-2 px-3"
          />
          <div className="font-semibold">Password</div>
          <input
            type="password"
            ref={currentPassword}
            placeholder="Enter your password"
            className="border border-black text-[#2f3b61] focus:border-[#2f3b61] rounded-md shadow-lg w-full text-xl py-2 px-3"
          />
          <button
            onClick={() => {
              if (
                users.find(
                  (user) => user.name === currentUsername.current.value
                )
              ) {
                alert("Login Success");
                setIsAuthUser(true);
                // redirect("/components/Home");
                router.push("/components/Home");
              }
            }}
            className="border rounded-md bg-[#2ea1f1] hover:bg-[#2f3b61] duration-200 text-white w-full mt-10 py-2 font-bold"
          >
            LOGIN
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default page;
