import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { FaHandshake, FaRegCheckCircle } from 'react-icons/fa'
import { AiOutlineSolution } from 'react-icons/ai'


const Values = () => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
  const slidefromBottomTL = (parent:any,elts:any)=>{
    gsap.timeline({
      scrollTrigger:{
      trigger:parent ,
      start:"top center",
      end:"bottom center"
    }}).fromTo(elts,
      {
        opacity:0,
        y:+200
      },
      {
        opacity:1,
        y:0,
        duration:0.48,
        stagger:0.24,
        ease:'in-out',
      }
    )
  }
 
  useEffect(() => {
    slidefromBottomTL('#nos-valeurs','.values-child')
  }, [])
  
  return (
    <div id='nos-valeurs' className='flex flex-col items-center  justify-center w-screen py-8 bg-[#222A35] text-white '>
        <h1 className='font-bold text-4xl max-[587px]:text-[30px] max-[655px]:mb-7'
        style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
        >
          NOS VALEURS
        </h1>
        <div className='w-screen min-h-[460px] flex px-7 gap-8 justify-around items-center max-[655px]:flex-wrap '>
          <div className='values-child flex p-3 flex-col border-[3px] border-[#c4ac27] border-solid gap-3 w-[280px] h-[340px] justify-around max-[655px]:shrink-0 max-[655px]:w-[70%] max-[450px]:w-[90%]'>
              <div className='w-[94%] self-center h-[50%]' style={{backgroundImage:"url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693186464/fizkes_123rf_116391933_custom_p8ygle.avif')", backgroundPosition:'center', backgroundSize:'cover'}}></div>
              <p className='text-2xl text-[#c4ac27] font-semibold'><FaRegCheckCircle className='inline mr-3 text-[#c4ac27]'/>Satisfaction du client</p>
              <ul className='text-[16.5px] font-medium'>
                <li>La satisfaction du client est au centre des décisions importantes</li>
              </ul>
          </div>
          <div className='values-child flex p-3 flex-col border-[3px] border-[#c4ac27] border-solid gap-3 w-[280px] h-[340px] justify-around max-[655px]:shrink-0 max-[655px]:w-[70%] max-[450px]:w-[90%]'>
              <div className='w-[94%] self-center h-[50%]' style={{backgroundImage:"url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693186295/gestion-chantier-est-effort-conjoint-photo-jeune-homme-femme-examinant-plans-construction-chantier-construction_590464-22488_tvjsyv.avif')", backgroundPosition:'center', backgroundSize:'cover'}}></div>
              <p className='text-2xl text-[#c4ac27] font-semibold'><FaHandshake className='inline mr-3'/>Collaboration</p>
              <ul className='text-[16.5px] font-medium'>
              <li className='text-justify'>Nos clients, nos sous-traitants, nos fournisseurs sont des partenaires avec qui nous travaillons, négocions dans un esprit collaboratif</li>
              </ul>
          </div>
          <div className='values-child flex p-3 flex-col border-[3px] border-[#c4ac27] border-solid gap-3 w-[280px] h-[340px] justify-around max-[655px]:shrink-0 max-[655px]:w-[70%] max-[450px]:w-[90%]'>
              <div className='w-[94%] self-center h-[50%]' style={{backgroundImage:"url('https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693186103/ingenieur-genie-civil_dyjj0r.avif')", backgroundPosition:'center', backgroundSize:'cover'}}></div>
              <p className='text-2xl text-[#c4ac27] font-semibold'><AiOutlineSolution className='inline mr-3'/>Promptitude</p>
              <ul className='text-[16.5px] font-medium '>
                <li className='text-justify'>Nous trouvons des solutions aux problèmes et les mettons en oeuvre afin de garantir le respect du délai et de la qualité du projet</li>
              </ul>
          </div>
        </div>     
      </div>
  )
}

export default Values