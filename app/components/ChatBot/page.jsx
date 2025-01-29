"use client";
import React, { useRef, useState } from "react";
import axios from "axios";
import "./style.css";

const page = () => {
  const [question, setQuestion] = useState(""); // State for the question input
  const [answer, setAnswer] = useState(null); // State for the answer
  const [processing, setProcessing] = useState(false); // State for the answer

  const bottomRef = useRef(null);

  const [displayQuestion, setDisplayQuestion] = useState([
    { ques: "Show me current border report", ans: "Ok, will do later" },
    {
      ques: "Give me border report",
      ans: "Report ID : 2023-DRN-046 Date : November 20th, 2023 Time of Detection : 9:15 PM IST Drone Model : Predator XP Temperature : 18°C (64°F) Wind Speed : 10 km/h Weather Conditions : Overcast skies with light rain Risk Level : Medium Location : Brahmaputra River, Assam, India near the Bhutan border Previous Activity : Increased thermal signatures detected over the past week The surveillance team recorded an unidentified object near the Brahmaputra River at 9:15 PM IST. The drone identified as a Predator XP operated by an unknown entity was detected at an altitude of 500 meters. Temperature readings were 18°C (64°F) with light winds and intermittent rain, providing optimal conditions for detection. Risk level is assessed as Medium due to the potential threat of unauthorized surveillance. Previous activity included a spike in thermal signatures suggesting movement, first noted three days prior. Further investigation is recommended to identify the purpose of this activity.",
    },
  ]);

  const handleChange = (e) => {
    setQuestion(e.target.value); // Update question input value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const res = await axios.post("http://localhost:8000/chat", {
        question: question, // Send the question as input
      });
      console.log(res.data.answer);
      setAnswer(res.data.answer); // Set the received answer
      setDisplayQuestion((prev) => [
        ...prev,
        { ques: question, ans: res.data.answer },
      ]);
    } catch (error) {
      console.error("Error making API request", error);
    } finally {
      setProcessing(false);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const res = await axios.post(
        "https://b1a2-2405-201-6-ecad-28c5-53c9-4422-ece2.ngrok-free.app/chat",
        {
          question: question, // Send the question as input
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res.data.answer);
      setAnswer(res.data.answer); // Set the received answer
      setDisplayQuestion((prev) => [
        ...prev,
        { ques: question, ans: res.data.answer },
      ]);

      //
      if (bottomRef.current) {
        setTimeout(() => {
          bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    } catch (error) {
      console.error("Error making API request", error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen p-5 bg-[#25314f]">
      {/* <div>Answer:</div> */}
      <div className="flex flex-row gap-5">
        {/* <div className="border flex-1 min-h-[70vh]">
          answ
          {answer && <p>{answer}</p>}
        </div> */}
        <div className="flex-1 min-h-[70vh] flex flex-col">
          {displayQuestion?.map((chat) => {
            return (
              <div>
                <div className="border rounded-xl py-2 px-3 bg-green-600 my-3 w-fit ml-auto">
                  {chat?.ques}
                </div>
                <div>
                  <div className="border rounded-xl py-2 px-3 bg-blue-600 my-1 w-fit">
                    {chat?.ans}
                  </div>
                  <div className="flex flex-row gap-2 mt-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 cursor-pointer hover:scale-110 duration-200"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 cursor-pointer hover:scale-110 duration-200"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 cursor-pointer hover:scale-110 duration-200"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                      />
                    </svg>
                    <div>Rating: 9/10</div>
                  </div>
                </div>
              </div>
            );
          })}
          {processing && (
            <div className="dots-container w-fit my-5">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full fixed bottom-0 bg-[#2c4075] -mx-5 px-5">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-row items-center"
        >
          <input
            type="text"
            name="question"
            value={question}
            onChange={handleChange}
            placeholder="Ask a question"
            className="text-black p-3 m-3 ml-0 rounded-full w-full outline-none"
          />
          {/* <button
            className="border p-3 rounded-full hover:scale-105 duration-200 font-semibold bg-blue-600"
            type="submit"
          >
            {!processing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                />
              </svg>
            )}
          </button> */}
          <button
            className="border p-3 rounded-full hover:scale-105 duration-200 font-semibold bg-blue-600"
            // type="submit"
            onClick={handleSubmit2}
          >
            {!processing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z"
                />
              </svg>
            )}
          </button>
        </form>
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default page;
