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
    <div className="bg-white min-h-screen text-black p-5">
      <div className="flex flex-row">
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
      </div>
    </div>
  );
};

export default page;
