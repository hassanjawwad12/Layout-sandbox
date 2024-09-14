//this is the landing page of the app 
//this is bascially a row with text in left and logo in right 
//header and footer components are included on this page 

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen bg-black '>
      <Header />
      <div className='flex lg:flex-row flex-col lg:w-[85%] w-[95%] lg:space-x-4'>

        <div className='flex flex-col lg:items-start items-center justify-center lg:w-1/2 w-full gap-4 relative mb-4'>
          <h1 className='md:text-6xl text-3xl text-white'>Codeando<span className='ml-3 font-semibold text-red-500 font-montserrat'>UAM</span></h1>
          <div className='lg:w-[85%] w-full lg:px-0 px-6'>
          <p className='text-white text-xl tracking-wide lg:text-xl text-center lg:text-left font-montserrat '>Este es un demo realizado para mostrar los alcances de la implementación de la Inteligencia Artificial en el aprendizaje de código para diseñadores, como parte del Concurso de Oposición Abierto CO.A.CAD.d.001.23.</p> 
         </div>

         <Link to='/chatting'><button className='bg-white w-[10rem] font-montserrat py-1 font-bold text-lg text-black hover:text-xl hover:bg-gray-200 rounded-full lg:absolute lg:mt-0 mt-4 bottom-4 transition duration-150 ease-in-out'>ENTRAR </button></Link>
        </div>
         <div className='flex items-center justify-center lg:w-1/2 w-full lg:mt-0 mt-6'>
        <img src='/symboll.png' alt='logo' className='lg:w-[90%] w-[50%] ' />
        </div>

      </div>
      <Footer />
      
    </div>
  )
}

export default App
