import { Carousel } from 'flowbite-react';
import { Link } from "@remix-run/react";
import { FaFacebook } from 'react-icons/fa'


export default function HeroCarousel() {
  return (
    <div className='w-screen h-[80vh] relative'>
        <Carousel className='rounded-none'>
            <div className="w-[100%] h-[100%] rounded-none relative" style={{backgroundImage: "url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692796074/chantier_zatxhw.avif')", backgroundPosition:"center", backgroundSize:"cover"}} >
                <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="w-[100%] h-[100%] rounded-none relative" style={{backgroundImage: "url('https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693022296/groupe-ding%C3%A9nieurs-afro-am%C3%A9ricains-travaillant-dans-la-zone-des-conduites-d%C3%A9gout-sur-un_kt4nhw.jpg')", backgroundPosition:"center", backgroundSize:"cover"}} >
                <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black bg-opacity-50"></div>
                
            </div>
            <div className="w-[100%] h-[100%] rounded-none relative" style={{backgroundImage: "url('https://res.cloudinary.com/drrquaosk/image/upload/v1692796062/ing1_jhi5gt.avif')", backgroundPosition:"center", backgroundSize:"cover"}} >
                <div className="w-[100%] h-[100%] absolute top-0 left-0 bg-black bg-opacity-50"></div>
            </div>
        </Carousel>
        <div className="w-[100%] h-[100%] absolute top-0 left-0 p-9 max-[504px]:pl-6 text-center flex flex-col gap-[40px] justify-center items-start ">
            <h1 className={`text-[90px] max-[929px]:text-[80px] max-[834px]:text-[72px] max-[758px]:text-[67px] max-[710px]:text-[60px] max-[643px]:text-[50px] max-[548px]:text-[45px] max-[488px]:text-[40px] text-white poppins`}>Let's Build Together</h1>
            <p className='text-[40px] max-[605px]:text-[30px] max-[495px]:text-[25px]' style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text' }}>GENIE CIVIL & ARCHITECTURE</p>
            <div className='w-[500px]'>
                <p className='text-white font-medium text-justify text-[18px] max-[548px]:text-[16px] max-[467px]:w-[70%] '>Nous construisons pour vous et avec vous votre projet de vie</p>
                <p className='text-white font-medium text-justify text-[18px] max-[548px]:text-[16px]'>Vous êtes au centre du projet</p>
                <p className='text-white font-medium text-justify text-[18px] max-[548px]:text-[16px]'>Votre satisfaction est notre priorité</p>
            </div>
            <div>
                <Link to={'/prennez-un-rdv'} className='max-[548px]:text-[14px] p-3 box-border border-[2px] max-[371px]:hidden border-[#c4ac27] border-solid bg-opacity-0 text-white hover:bg-[#c4ac27] font-medium transition-all duration-300 mr-8  '>Prennez un RDV</Link>
                <a href="https://www.facebook.com/profile.php?id=100084442610740" className='max-[548px]:text-[14px] p-3  bg-[#2759c4] text-white hover:bg-[#133d97] font-medium' ><FaFacebook className='inline mr-3'/>Rejoignez nous</a>
            </div>
        </div>
    </div>
  )
}


