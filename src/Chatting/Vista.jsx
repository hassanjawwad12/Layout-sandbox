import React from "react";

const Vista = ({gptarray,setGptArray}) => {
  console.log(gptarray);

  return (
    <>
      <br className="lg:block hidden" />
      <br className="lg:block hidden" />
      <br className="lg:block hidden" />

      <p className="text-white text-3xl font-montserrat">Vista</p>

      <div className="w-full bg-neutral-100 h-full p-4 ">
        <p className="text-black text-2xl font-bold">Sample Page</p>
      </div>
    </>
  );
};

export default Vista;
