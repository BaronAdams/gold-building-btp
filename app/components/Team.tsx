import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { MdEngineering } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
const Team = () => {
  return (
    <div id='nos-experts' className='flex flex-col items-center bg-[#222A35] text-white justify-center w-screen py-8'>
      <h1 id='team-title' className='font-bold text-4xl max-[587px]:text-[30px] capitalize pb-[40px] text-[#dfc73e]'
          style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
          >NOS EXPERTS</h1>
      <div className='w-screen min-h-[400px] flex flex-wrap gap-16 justify-center items-center '>
          <div className="flex gap-8 max-[630px]:flex-col max-[630px]:items-center min-h-[280px] shrink-0">
            <img src={'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693020263/M.Borel_clffaf.avif'} alt='Expert 1' className='object-cover w-[280px] h-[280px] max-[630px]:w-[110px] max-[630px]:h-[110px] max-[630px]:rounded-full' />
            <div className="flex h-full flex-col gap-6">
              <p className='font-bold text-[27px]' style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}><FaUserAlt className='text-[18.5px] mr-3 inline text-white'/>M. BOREL Franck</p>
              <p className='font-semibold text-[18.5px]'><MdEngineering className='mr-3 inline text-white'/> Responsable Architecte</p>
              <p className='font-semibold text-[16.5px]'><FiPhone className='mr-3 inline text-white'/>+237 656 925 763</p>
            </div>
          </div>
          <div className="flex max-[630px]:flex-col max-[630px]:items-center gap-8 min-h-[280px] shrink-0">
            <img src={'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693023127/IMG_7366_ognr34.avif'} alt='Expert 1' className='object-cover object-top w-[280px] h-[280px]  max-[630px]:w-[110px] max-[630px]:h-[110px] max-[630px]:rounded-full' />
            <div className="flex h-full flex-col gap-7">
              <p className='font-bold text-[27px]' style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}><FaUserAlt className='text-[18.5px] mr-3 inline text-white'/> M. NIZEGA Brice</p>
              <p className='font-semibold text-[18.5px]'><MdEngineering className='mr-3 inline text-white'/>Responsable Structures</p>
              <p className='font-semibold text-[16.5px]'><FiPhone className='mr-3 inline text-white'/>+237 696 310 487</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Team