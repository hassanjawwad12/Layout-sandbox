import React from "react";
import Header from "../Components/Header";
import Chat from "./Chat";
import Code from "./Code";
import Vista from "./Vista";

//this page will have 4 components
//one for header, one for chat, one for html and one for vista

const Chatting = () => {
  const [res,setRes]=React.useState("");
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black gap-2 relative  p-4">
      <Header />
      <div className="lg:absolute left-4 top-10 mt-10 lg:px-10 lg:w-[42%] w-[90%]">
        <p className="block text-white text-md font-montserrat">
          {" "}
          INSTRUCCIONES: genera un wireframe en papel, súbelo al chat y genera
          el código HTML de tu web. No te preocupes si no sabes cómo hacerlo{" "}
          <span className="text-red-500">Codeando UAM</span> te ayudará.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center lg:w-[95%] w-full gap-4 lg:space-x-4 space-y-6   ">
        <div className="lg:w-[31%]  w-[90%] h-[70vh] ">
          <Chat />
        </div>

        <div className="lg:w-[31%]  w-[90%] h-[70vh] ">
          <Code />
        </div>

        <div className="lg:w-[31%] w-[90%] h-[70vh]">
          <Vista />
        </div>
      </div>
    </div>
  );
};

export default Chatting;

