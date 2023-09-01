import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { useEffect } from 'react'


const Mission = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  const slidefromTopTL = (parent:any,elts:any)=>{
    gsap.timeline({scrollTrigger:{
      trigger:parent ,
      start:"top center",
      end:"bottom center"
    }}).fromTo(elts,
      {
        opacity:0,
        y:-200
      },
      {
        opacity:1,
        y:0,
        duration:0.6,
        stagger:0.3,
        ease:'in-out',
      }
    )
  }
  useEffect(() => {
    slidefromTopTL('#notre-mission','.mission-child')
  }, [])
  return (
    <div className="bg-[#222A35] ">
      <div id='notre-mission' className='w-screen flex flex-wrap justify-center items-center min-h-[400px] gap-[100px] max-[820px]:gap-[40px] py-14 max-[350px]:py-10'>
          <div className='flex flex-col shrink-0 w-[37.5%] max-[820px]:w-[40%] max-[741px]:w-[80%] mission-child'>
              <h1 className='font-semibold text-4xl max-[587px]:text-[30px] p-3 max-[350px]:py-0 text-white'
                style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
              >
                NOTRE MISSION
              </h1>
              <p className='text-[16.5px] shrink-0 p-3 pt-[30px] max-[350px]:pt-[20px] text-white  font-medium text-justify'>La mission de GOLD BUILING BTP est de mener à termes tous les projets de construction
              de toutes les envergures selon les exigences techniques et économiques. Notre seule
              limite se trouvant sur l'imagination des clients, leur
              satisfaction demeure notre priorité principale</p>
          </div>
          <img src='https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1692839846/Image1_gpekr1.jpg' className='w-[350px] h-[270px] max-[741px]:w-[80%] max-[350px]:h-[250px] object-cover mission-child'/>
      </div>
    </div>
  )
}

export default Mission