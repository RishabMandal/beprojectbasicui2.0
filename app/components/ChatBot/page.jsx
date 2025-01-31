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
    {
      ques: "Show me current border report",
      ans: "Ok, will do later",
      rating: 0,
      id: 691,
    },
    {
      ques: "Give me border report",
      rating: 0,
      id: 692,
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
        "https://0160-2405-201-6-ecad-f0d4-294e-5d26-9b42.ngrok-free.app/chat",
        {
          question: question, // Send the question as input
        },
        { headers: { "Content-Type": "application/json" } }
      );
      // console.log(res.data.answer);
      console.log(res.data);

      setAnswer(res.data.answer); // Set the received answer
      setDisplayQuestion((prev) => [
        ...prev,
        {
          ques: question,
          ans: res.data.answer,
          id: res.data.id,
          rating: 0,
        },
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
  const [rating, setRating] = useState(0);

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
            const handleRating = async (ratingValue, id) => {
              setRating(ratingValue);
              try {
                const res = await axios.post(
                  "https://0160-2405-201-6-ecad-f0d4-294e-5d26-9b42.ngrok-free.app/rate",
                  {
                    rating: ratingValue,
                    conversation_id: id,
                  },
                  { headers: { "Content-Type": "application/json" } }
                );
                // console.log(res.data.answer);
                setDisplayQuestion((prev) =>
                  prev.map((chat) =>
                    chat.id === id ? { ...chat, rating: ratingValue } : chat
                  )
                );
              } catch (error) {
                console.error("Error making API request", error);
              }
            };

            return (
              <div key={chat.id}>
                <div className="border rounded-xl py-2 px-3 bg-green-600 my-3 w-fit ml-auto">
                  {chat?.ques}
                </div>
                <div>
                  <div className="border rounded-xl py-2 px-3 bg-blue-600 my-1 w-fit">
                    {chat?.ans}
                  </div>
                  <div className="flex flex-row gap-2 mt-1 items-center">
                    {/* Star Rating */}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={star <= chat?.rating ? "yellow" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer hover:scale-110 duration-200"
                        onClick={() => handleRating(star, chat?.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 17.75l-3.617 2.257a1 1 0 0 1-1.45-1.05l1.145-4.272-3.557-2.755a1 1 0 0 1 .55-1.732l4.384-.331 1.52-4.347a1 1 0 0 1 1.9 0l1.52 4.347 4.384.331a1 1 0 0 1 .55 1.732l-3.557 2.755 1.145 4.272a1 1 0 0 1-1.45 1.05L12 17.75z"
                        />
                      </svg>
                    ))}
                    <div>Rating: {chat?.rating}/5</div>
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
