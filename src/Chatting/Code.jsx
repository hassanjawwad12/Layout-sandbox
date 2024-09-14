import React from "react";

const Code = ({gptarray}) => {

  console.log(gptarray);
  return (
    <>
      <br className="lg:block hidden" />
      <br className="lg:block hidden" />
      <br className="lg:block hidden" />
    
      <p className="text-white text-3xl font-montserrat">HTML</p>

      <div className="w-full bg-gray-700 p-4 h-full ">
        <h1 className="text-black text-2xl font-bold">CODE</h1>
        <p className="text-white text-md">{gptarray}</p>
      </div>
    </>
  );
};

export default Code;
