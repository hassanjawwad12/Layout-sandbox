import React from "react";
import Header from "../Components/Header";

const Details = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black ">
      <Header />
      <div className="flex lg:flex-row flex-col lg:w-[85%] w-[95%] lg:space-x-4">
        <div className="flex flex-col lg:items-start items-center justify-center lg:w-1/2 w-full gap-4 relative mb-4">
          <h1 className="md:text-5xl text-3xl text-white">
            Codeando<span className="ml-3 font-semibold text-red-500 font-montserrat">UAM</span>
          </h1>
          <div className="lg:w-[77%] w-full lg:px-0 px-6">
            <p className="text-white text-xl tracking-wide lg:text-xl text-center lg:text-left font-montserrat ">
              Las transformaciones de la tecnología, han enfatizado nuestro
              interés en la utilización de la Inteligencia Artificial como un
              apoyo para fortalecer el aprendizaje. Ayudando a las y los
              estudiantes a fortalecer sus habilidades técnicas, y a los
              profesores, en dar seguimiento a múltiples actividades.
            </p>
            <p className="text-white text-xl tracking-wide lg:text-xl text-center lg:text-left font-montserrat">
              Con <span className="text-yellow-400">Codeando UAM</span>, las
              personas estudiantes obtienen retroalimentación inmediata y los
              apoya en visualizar y simular escenarios personalizados a las
              necesidades e intereses de cada persona. Además el demo, permite
              programar a partir de un dibujo a manera de Wireframe. Este demo,
              pretende evidenciar estos elementos.
            </p>
          </div>

        </div>
        <div className="flex items-center justify-center lg:w-1/2 w-full lg:mt-0 mt-6">
          <img src="/symboll.png" alt="logo" className="lg:w-[90%] w-[50%] " />
        </div>
      </div>
    </div>
  );
};

export default Details;
