import { Link } from '@remix-run/react'
import { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

const Services = () => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
  const fadeIn = ()=>{
    gsap.timeline({
      scrollTrigger:{
      trigger:'#nos-services' ,
      start:"top center",
      end:"bottom center"
    }}).fromTo('#services-title',{
        y: -150,
        opacity:0
    },{
      y:0,
      opacity:1
    }).fromTo('.services-child',
      {
        opacity:0,
      },
      {
        opacity:1,
        duration:0.58,
        stagger:0.14,
        ease:'in-out',
      }
    )
  }
 
  useEffect(() => {
    fadeIn()
  }, [])
  return (
    <div id='nos-services' className='flex flex-col items-center  justify-center w-screen py-8'>
        <h1 id='services-title' className='font-bold text-4xl max-[587px]:text-[30px] capitalize pb-[40px] text-[#dfc73e]'
        style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
        >NOS SERVICES</h1>
        <div className='w-screen flex max-[587px]:flex-wrap px-7 gap-8 justify-around items-center services-child'>
          <div className='flex flex-col gap-3 w-[300px] max-[587px]:items-center justify-center'>
              <div className='rounded-full border-[3.2px] border-[#c4ac27] w-[130px] h-[130px]' style={{backgroundImage:"url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693024755/images_wukzps.avif')",backgroundSize:'cover',backgroundPosition:'center'}}></div>
              <Link to={'/services/etudes-architecturales-et-structurales'} className='text-2xl hover:underline text-[#c4ac27] font-semibold'
              style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
              >
                Etudes architecturales et structurales
              </Link>
              <ul className='text-[16.5px] max-[587px]:self-start font-medium'>
                <li>Plan 2D et 3D</li> 
                <li>Dévis descriptif et quantitatif</li>
                <li>Dossier de permi de bâtir</li>
                <li className='invisible'>Dossier de permi de bâtir</li>
                <li className='invisible'>Dossier de permi de bâtir</li>
              </ul>
          </div>
          <div className='flex flex-col gap-3 w-[300px] max-[587px]:items-center justify-center services-child'>
              <div className='rounded-full border-[3.2px] border-[#c4ac27] w-[130px] h-[130px]' style={{backgroundImage:"url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693024848/construction-1510561_960_720-1_hvjdse.avif')",backgroundSize:'cover',backgroundPosition:'center'}}></div>
              <Link to={'/services/realisation-gros-et-second-oeuvre'} className='text-2xl hover:underline text-[#c4ac27] font-semibold '
              style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
              >
              Réalisation gros et second oeuvre
              </Link>
              <ul className='text-[16.5px] font-medium'>
                <li>Infrastructure et structure</li>
                <li>Plombérie, électricité et réseaux divers</li>
                <li>Menuiserie bois, aluminium, revêtement, staff, décoration et étancheité</li>
              </ul>
          </div>
          <div className='flex flex-col gap-3 w-[300px] max-[587px]:items-center justify-center services-child'>
              <div className='rounded-full border-[3.2px] border-[#c4ac27]  w-[130px] h-[130px]' style={{backgroundImage:"url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693024935/inge_mln3jx.avif')", backgroundPosition:'center', backgroundSize:'cover'}}></div>
              <Link to={'/services/prestation-de-services'} className='text-2xl hover:underline text-[#c4ac27] font-semibold '
              style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
              >Prestation de services</Link>
              <ul className='text-[16.5px] font-medium '>
                <li>Cabinet de conseil et suivi</li>
                <li>Vente des matériaux de construction de construction</li>
                <li>Location du matériel de construction</li>
                <li className='invisible'>Location du matériel de construction</li>
                <li className='invisible'>Location du matériel de construction</li>
              </ul>
          </div>
        </div>     
      </div>
  )
}

export default Services