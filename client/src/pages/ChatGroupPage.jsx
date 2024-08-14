import axios from "../config/axiosInstance";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ChatGroupPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmitAPI = async (e) => {
    e.preventDefault();

    if (question.trim()) {
      setLoading(true);

      try {
        const { data } = await axios({
          method: "post",
          url: "/chats/openai",
          data: {
            inputPrompt: question,
          },
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        });
        setResponse(data.result);
        console.log(data);
      } catch (error) {
        console.log(error);
        toast.error("Error to fetch API");
      }

      setQuestion("");
    }
  };

  useEffect(() => {
    console.log(question);
  }, [question]);

  return (
    <div className="flex-1 flex flex-col sm:ml-64 min-h-screen">
      <div className="flex items-center justify-between px-20 py-4 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-10 rounded-full mr-4">
              <img
                alt="Penerima"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
              /&gt;
            </div>
          </div>
          <div className="text-lg font-bold text-gray-800">HACKTIV8 GROUPS</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-20">
        <div className="chat chat-start px-4">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">Obi-Wan Kenobi</div>
          <div className="chat-bubble">You were the Chosen One!</div>
        </div>

        <div className="chat chat-end px-4">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-header">Anakin</div>
          <div className="chat-bubble">I hate you!</div>
        </div>
      </div>
      <div className="px-20 py-4 bg-white border-t border-gray-200">
        <div className="flex items-center">
          {/* You can open the modal using ID.showModal() method */}
          <button
            className="text-[#6A74C9] px-2"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box bg-white">
              <form
                method="dialog"
                className="w-full max-w-md border-[#6A74C9]"
                onSubmit={handleSubmitAPI}
              >
                <h3 className="text-lg font-bold py-2">
                  Hello, Can I help you!
                </h3>
                <textarea
                  className="w-full p-2 mb-4 rounded bg-[#EFF2F9] text-neutral"
                  rows={4}
                  placeholder="Enter your question?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <button className="btn btn-md rounded-lg text-white bg-[#6A74C9]">
                  SUBMIT
                </button>
              </form>
              {response && (
                <div className="mt-6 w-full max-w-md bg-[#EFF2F9] p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-2">Response :</h3>
                  <p>{response}</p>
                </div>
              )}
            </div>
          </dialog>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A74C9] pr-16"
          />
          <button className="text-[#6A74C9] p-2 rounded-lg ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
