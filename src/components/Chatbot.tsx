/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { FaRocketchat } from "react-icons/fa";
import { FaMessage, FaRobot } from "react-icons/fa6";
import { toast } from "sonner";

const allQuestions = [
  {
    question: "What services does Quadra Security provide?",
    answer: "We provide CCTV installation, maintenance, and AMC services.",
  },
  {
    question: "How can I book a service?",
    answer:
      "You can book a service by filling the form in the Book Now section on our website.",
  },
  {
    question: "Do you provide service across India?",
    answer: "Currently, we provide services in the Uttarakhand region.",
  },
  {
    question: "What are the installation charges?",
    answer:
      "Charges depend on the type of camera and location. You can fill the contact form to get a quote.",
  },
  {
    question: "What is the warranty period for CCTV?",
    answer:
      "Usually, there is a 1-year manufacturer warranty with optional AMC plans.",
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUserInfo, setHasUserInfo] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [questionPhase, setQuestionPhase] = useState(true);

  const handleStart = () => {
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!mobile.trim()) {
      toast.error("Please enter your mobile number.");
      return;
    }
    if (!/^\d{10}$/.test(mobile.trim())) {
      toast.error("Enter a valid 10-digit mobile number.");
      return;
    }

    setMessages([
      { from: "bot", text: `Hi ${name}, welcome to Quadra Security! 👋` },
    ]);
    setHasUserInfo(true);
    toast.success("Welcome! Let's get started.");
  };

  const handleClick = (q: string, a: string) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: q },
      { from: "bot", text: a },
      { from: "bot", text: "Would you like to ask another question? (yes/no)" },
    ]);
    setQuestionPhase(false);
  };

  const handleUserResponse = (text: string) => {
    const lower = text.toLowerCase();
    setMessages((prev) => [...prev, { from: "user", text }]);
    if (lower === "yes" || lower === "y") {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Here are some questions you can ask:" },
      ]);
      setQuestionPhase(true);
    } else {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thank you for chatting with Quadra Security!" },
      ]);
      toast("Chat session ended.", { icon: "👋" });
    }
  };

  const visibleQuestions = showAll ? allQuestions : allQuestions.slice(0, 3);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 bg-[#13095C] text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition"
        aria-label="Toggle Chat"
      >
       <FaMessage/>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 max-w-[90%] bg-[#13095C] shadow-2xl rounded-xl z-50 flex flex-col">
          <div className="bg-purple-700 text-white px-4 py-3 rounded-t-xl font-semibold text-lg flex justify-between items-center">
            <FaRobot/> Quadra Bot
            <button
              onClick={() => {
                setIsOpen(false);
                toast("Chat closed. Come back anytime!", { icon: "👋" });
                setMessages([
                  {
                    from: "bot",
                    text: `Hi ${name}, welcome back to Quadra Security! 👋`,
                  },
                ]);
                setQuestionPhase(true);
                setShowAll(false);
              }}
              className="text-white hover:text-shadow-white text-3xl font-bold ml-2"
              aria-label="Close Chat"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col gap-2 p-3 max-h-64 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-xl max-w-[80%] whitespace-pre-line ${
                  msg.from === "user"
                    ? "bg-blue-100 text-blue-900 self-end"
                    : "bg-gray-100 text-gray-800 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {!hasUserInfo && (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 text-white rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="p-2 text-white rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button
                  onClick={handleStart}
                  className="bg-[#0E2A47] text-white py-2 rounded hover:bg-[#16406a] transition"
                >
                  Continue
                </button>
              </div>
            )}

            {hasUserInfo && !questionPhase && (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Type yes or no"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUserResponse((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = "";
                    }
                  }}
                  className="text-white p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          {hasUserInfo && questionPhase && (
            <div className="p-3 border-t flex flex-col gap-2 bg-[#FAFAFA]">
              {visibleQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleClick(q.question, q.answer)}
                  className="text-left text-sm bg-white hover:bg-blue-50 text-[#0E2A47] font-medium p-2 rounded-lg border border-gray-200 transition"
                >
                  {q.question}
                </button>
              ))}
              {!showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-blue-800 text-sm self-center mt-1 hover:text-blue-400"
                >
                  Show more
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
