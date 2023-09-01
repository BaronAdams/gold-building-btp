import React from 'react'
import { FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram, FaBrain, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdVilla, MdDesignServices,MdEngineering, MdHighQuality } from 'react-icons/md'
import { BiTask } from 'react-icons/bi'
import { ImLocation2 } from 'react-icons/im'
import { Link } from "@remix-run/react"


const Footer = () => {
  return (
    <div className="w-screen z-10 self-end flex flex-col gap-[45px] bg-[#092237] py-11 items-center text-white">
        <div className='w-screen pl-[70px] max-[587px]:pl-[40px] flex flex-wrap gap-[60px] max-[440px]:gap-[30px] justify-start items-center'>
            <div className='shrink-0 flex gap-4 flex-col'>
                <h2 className='font-medium text-xl'>A propos de nous</h2>
                <Link className='hover:underline' to='/a-propos/#notre-mission'><BiTask className='inline mr-3'/>Notre mission</Link>
                <Link className='hover:underline' to='/a-propos/#notre-vision'><FaBrain className='inline mr-3'/>Notre Vision</Link>
                <Link className='hover:underline' to='/a-propos/#nos-valeurs'><MdHighQuality className='inline mr-3'/>Nos valeurs</Link>
                <Link className='invisible hover:underline' to='/#nos-valeurs'><MdHighQuality className='inline mr-3'/>Nos valeurs</Link>
            </div>
            <div className='shrink-0 flex gap-4 flex-col'>
                <h2 className='font-medium text-xl'>Réseaux Sociaux</h2>
                <a className='hover:underline' href='https://www.facebook.com/profile.php?id=100084442610740'><FaFacebook className='inline mr-3'/>Facebook</a>
                <a className='hover:underline' href='https://www.linkedin.com/in/gold-building-btp-1b66b7276'><FaLinkedin className='inline mr-3'/>LinkedIn</a>
                <a className='hover:underline' href='https://twitter.com/GoldBtp'><FaTwitter className='inline mr-3' />Twitter</a>
                <a href='#' className='invisible hover:underline'><FaYoutube className='inline mr-3' />YouTube</a>
            </div>
            <div className='shrink-0 flex-wrap flex gap-4  flex-col text-white'>
                <h2 className='font-medium text-xl'>Services</h2>
                <Link to={'/services/etudes-architecturales-et-structurales'} className='max-[411px]:w-[80%] hover:underline'><MdDesignServices className='inline mr-3'/>Etudes architecturales et structurales</Link>
                <Link to={'/services/realisation-gros-et-second-oeuvre'} className='max-[411px]:w-[80%] hover:underline'><MdVilla className='inline mr-3' />Réalisation de gros oeuvre et second oeuvre</Link>
                <Link to={'/services/prestation-de-services'} className='max-[411px]:w-[80%] hover:underline'><MdEngineering className='inline mr-3'/>Prestation de services</Link>
                <Link to={'/services'} className='invisible'><MdEngineering className='inline mr-3'/>Prestation de services</Link>
            </div>
            <div className='shrink-0 flex gap-4 flex-col text-white'>
                <h2 className='font-medium text-xl'>Contactez nous</h2>
                <span className='max-[411px]:w-[80%]'><FaPhone className='inline mr-3'/> +237 650 716 482 / 656 925 763 </span>
                <span className='max-[411px]:w-[80%]'><ImLocation2 className='inline mr-3'/> Face Génie Militaire PK 10.Douala </span>
                <span ><FaMailBulk className='inline mr-3'/> goldbuildingbtp@gmail.com</span>
                <span className='invisible'><FaMailBulk className='inline mr-3'/> goldbuildingbtp@gmail.com</span>
            </div>
        </div>
        <p className='text-center max-[353px]:w-[85%]'>Gold Building BTP ©2023 All rights reserved | Developped by <img className='w-[180px] h-[180px] object-cover inline' src='https://res.cloudinary.com/djcj1ulqo/image/upload/c_scale,f_auto,h_960,q_auto,w_960/v1693122661/20230827_084832_0000_1_xhppki.jpg'/> </p>
    </div>
  )
}

export default Footer