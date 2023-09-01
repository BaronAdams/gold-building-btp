import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'

const Vision = () => {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
  const slidefromLeftTL = (parent:any,elts:any)=>{
    gsap.timeline({scrollTrigger:{
      trigger:parent ,
      start:"top center",
      end:"bottom center"
    }}).fromTo(elts,{
      opacity:0,
      x:-200
    },
      {
        opacity:1,
        x:0,
        duration:0.6,
        stagger:0.2,
        ease:'in-out',
      }
    )
  }
  useEffect(() => {
    slidefromLeftTL('#notre-vision','.vision-child')
  }, [])
  return (
    <div id='notre-vision' className='w-screen flex flex-wrap justify-center items-center min-h-[400px] gap-[100px] max-[820px]:gap-[40px] py-14 max-[350px]:py-10'>
        <img src='https://res.cloudinary.com/drrquaosk/image/upload/v1692796078/Image1_hxyjtk.avif' className='w-[350px] h-[270px] max-[741px]:w-[80%] max-[350px]:h-[250px] object-cover vision-child'/>
        <div className='flex shrink-0 flex-col w-[37.5%] vision-child max-[820px]:w-[40%] max-[741px]:w-[80%]'>
            <h1 className='font-bold text-4xl max-[587px]:text-[30px] pb-[40px] max-[350px]:pb-[30px]'
            style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
            >
              NOTRE VISION</h1>
            <p className='text-[16.5px] shrink-0 font-medium text-justify'>
            Chez GOLD BUILDING BTP, la qualité de notre travail est une source importante de fierté, et nous travaillons sans relâche pour
            accroître et approfondir nos connaissances,afin de rester les meilleurs en matière de construction civils
            </p>
        </div>
    </div>
  )
}

export default Vision