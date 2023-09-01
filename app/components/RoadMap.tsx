import React from 'react'
import { FaHandshake, FaRegCheckCircle } from 'react-icons/fa'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const RoadMap = () => {
  return (
    <div id='roadmap' className='flex flex-col items-center  justify-center w-screen py-8'>
        <h1 className='font-bold text-4xl max-[587px]:text-[30px] max-[735px]:mb-5'
        style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
        >
          NOTRE SUIVI
        </h1>
        <div className='w-screen min-h-[360px] flex px-7 justify-around items-center max-[735px]:flex-wrap max-[735px]:gap-5'>
          <div className='roadmap-child shadow-2xl bg-white text-black flex flex-col gap-3 w-[23.5%] h-[290px] max-[1024px]:w-[32%] max-[735px]:w-[70%] max-[400px]:w-[95%] max-[306px]:h-[330px] '>
              {/* <div className='w-[100%] h-[50%]' style={{backgroundImage:"url('/ing1.jpeg')", backgroundPosition:'center', backgroundSize:'cover'}}></div> */}
              <p className='text-2xl pl-4 text-[#c4ac27] font-semibold'><BsArrowUpRightCircle className='inline mr-3'/>Programme 1</p>
              <ul className='text-[16.5px] p-4 font-medium'>
              <li>Une étude de faisabilité technique et financière de votre projet. Matérialisation 2D et 3D de vos idées de construction. Accompagnement dans les procédures d’obtention des documents administratifs. </li>
              </ul>
          </div>
          <div className='roadmap-child shadow-2xl bg-white text-black flex flex-col gap-3 w-[23.5%] h-[290px] max-[1024px]:w-[32%] max-[735px]:w-[70%] max-[400px]:w-[95%]'>
              {/* <div className='w-[100%] h-[50%]' style={{backgroundImage:"url('/ing1.jpeg')", backgroundPosition:'center', backgroundSize:'cover'}}></div> */}
              <p className='text-2xl pl-4 text-[#c4ac27] font-semibold'><BsArrowUpRightCircle className='inline mr-3'/>Programme 2</p>
              <ul className='text-[16.5px] p-4 font-medium'>
              <li>Vos projets sont réalisés par des proféssionels du métier, ayant une formidable connaissance du matériau et des procédés généraux de construction</li>
              </ul>
          </div>
          <div className='roadmap-child shadow-2xl bg-white text-black flex flex-col gap-3 w-[23.5%] h-[290px] max-[1024px]:w-[32%] max-[735px]:w-[70%] max-[400px]:w-[95%]'>
              {/* <div className='w-[100%] h-[50%]' style={{backgroundImage:"url('/ing1.jpeg')", backgroundPosition:'center', backgroundSize:'cover'}}></div> */}
              <p className='text-2xl pl-4 text-[#c4ac27] font-semibold'><BsArrowUpRightCircle className='inline mr-3'/>Programme 3</p>
              <ul className='text-[16.5px] p-4 font-medium'>
              <li>Un control et suivi rigoureux de votre projet, une orientation spécifique et précise sur la portée et la rentabilité de votre investissement</li>
              </ul>
          </div>
         
        </div>     
      </div>
  )
}

export default RoadMap