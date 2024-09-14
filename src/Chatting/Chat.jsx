import React from "react";
import { useState, useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import Code from "./Code";
import data from "../Dummy/data";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messageInputRef = useRef(null);
  const chatBoxRef = useRef(null);
  const [gptarray, setGptArray] = useState([]);
  
  const getResponse = async () => {
    setLoading(true);

    const text = messageInputRef.current.value;
    messageInputRef.current.value = "";

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "user",
        content: text,
      },
    ]);

    const temp = data;
    //const  temp = "How can I help you today?";

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "assistant",
        content: temp,
      },
    ]);

    setGptArray((prevGptArray) => [
      ...prevGptArray,
      {
        content: temp,
      },
    ]);

    setLoading(false);

    messageInputRef.current.value = "";

    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    setLoading(false);
    console.log(temp);
    console.log(gptarray);
  
  };

  const handleMessageSubmit = () => {
    getResponse();
  };

  return (
    <>
      <br className="lg:block hidden" />
      <br className="lg:block hidden" />
      <br className="lg:block hidden" />

      <p className="text-white text-3xl font-montserrat">Chat AI</p>
      <div className="w-full bg-gray-800 h-full p-4 relative">
        <div
          ref={chatBoxRef}
          className="space-y-6 flex flex-col w-full py-4 overflow-y-scroll h-[90%] flex-grow "
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center "
            >
              {message.role === "assistant" ? (
                <div className=" w-[95%] bg-indigo-500 flex flex-col items-center justify-center p-2 rounded-xl">
                  <div className="flex flex-row  h-full w-full gap-4 ">
                    <div className=" flex flex-col justify-center items-center w-16 h-10 ml-4 bg-zinc-300 rounded-[7px]  ">
                      <p className="text-white font-semibold">AI</p>
                    </div>
                    <p className="text-lg font-normal  whitespace-pre-wrap text-white">
                      {message.content}
                    </p>
                  </div>
                </div>
              ) : (
                <div className=" w-[95%] bg-gray-400 flex flex-col items-center justify-center p-2 rounded-xl">
                  <div className="flex flex-row  w-full gap-4 ">
                    <div className=" flex flex-col justify-center items-center w-10 h-10 ml-4 bg-zinc-300 rounded-[7px] ">
                      <p className="text-white font-semibold">User</p>
                    </div>
                    <p className="text-lg font-normal text-white">
                      {message.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 flex justify-between h-12 px-1 items-center w-[90%] mt-10 bg-white border rounded-xl mb-1 ">
          {loading ? (
            <>
              <input
                type="text"
                className="message-input px-2 text-zinc-700 bg-white outline-none w-full h-full"
                placeholder="Type your query here..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                ref={messageInputRef}
              />
            </>
          ) : (
            <>
              <input
                type="text"
                className="message-input px-2 text-zinc-700 bg-white outline-none w-full h-full"
                placeholder="Type your query here..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                ref={messageInputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleMessageSubmit();
                  }
                }}
              />
            </>
          )}

          <button type="submit" className="focus:outline-none">
            {loading ? (
              <>
                <FaSpinner className="text-3xl text-indigo-500 animate-spin mr-4" />
              </>
            ) : (
              <>
                <AiOutlineSend
                  className="text-4xl text-indigo-500 cursor-pointer mr-2 hover:scale-105"
                  onClick={handleMessageSubmit}
                />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;

/* const url = Backend+"/chat";
      const stream = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            gptarray,
            query: messageInputRef.current.value,
        }),
    });

    setMessageInput('');

    console.log(stream);
    const res = stream.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let temp = "";
    console.log(res);
    while (true) {
        const { done, value } = await res.read();
        if (done) {
            break;
        }
        temp += decoder.decode(value);
    }*/
