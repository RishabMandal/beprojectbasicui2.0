"use client";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [question, setQuestion] = useState(""); // State for the question input
  const [answer, setAnswer] = useState(null); // State for the answer

  const handleChange = (e) => {
    setQuestion(e.target.value); // Update question input value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        question: question, // Send the question as input
      });
      setAnswer(res.data.answer); // Set the received answer
    } catch (error) {
      console.error("Error making API request", error);
    }
  };

  return (
    <div className="min-h-screen p-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          value={question}
          onChange={handleChange}
          placeholder="Ask a question"
          className="text-black p-3 m-3 ml-0 rounded-xl"
        />
        <button
          className="border p-3 rounded-xl hover:scale-105 font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>Answer:</div>
      {answer && <p>{answer}</p>}
    </div>
  );
};

export default page;
