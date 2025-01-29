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
      const res = await axios.post("http://localhost:8000", {
        question: question, // Send the question as input
      });
      setAnswer(res.data.answer); // Set the received answer
    } catch (error) {
      console.error("Error making API request", error);
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://7fea-2405-201-6-ecad-28c5-53c9-4422-ece2.ngrok-free.app", {
        question: question, // Send the question as input
      });
      setAnswer(res.data.answer); // Set the received answer
    } catch (error) {
      console.error("Error making API request", error);
    }
  };

  return (
    <div className="min-h-screen">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          value={question}
          onChange={handleChange}
          placeholder="Ask a question"
          className="text-black p-3 m-3"
        />
        <button className="border p-3 rounded-xl hover:scale-105" type="submit">
          Submit 1
        </button>
        <button onClick={handleSubmit2} className="border p-3 rounded-xl hover:scale-105">
          Submit 2
        </button>
      </form>
      {answer && <p>Answer: {answer}</p>} {/* Display the answer */}
    </div>
  );
};

export default page;
