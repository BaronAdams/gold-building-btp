import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
    return [
      { title: "Services - Réalisation de gros et second oeuvre" }
    ];
  }

const Realisation = () => {
    return (
      <div>
          <div className="w-screen h-[80vh] max-[350px]:h-[70vh] rounded-none flex flex-wrap relative">
              <div className="w-[100%] h-[100%] p-[90px] max-[815px]:px-[50px] max-[378px]:px-[30px] flex flex-col justify-end gap-[40px] absolute top-0 left-0 bg-black bg-opacity-50 z-100 ">
                  <h1 className='text-[90px] font-semibold text-[#dfc73e] max-[1045px]:text-[80px] max-[975px]:text-[75px] max-[925px]:text-[68px] max-[855px]:text-[62px] max-[580px]:text-[55px] max-[535px]:text-[48px] max-[450px]:text-[43px] max-[338px]:text-[39px]'>
                      Réalisation gros oeuvre et second oeuvre
                  </h1>
                  <p className='font-medium text-white text-[22px] max-[490px]:text-[18px]'>Réalisez complètement vos projets de construction de batiments de la fondation jusqu'aux finitions</p>
              </div>
              <img src="https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693137920/Image1_d7lci9.jpg" className='h-full  w-full object-cover ' />
          </div>
          <div>
              <div className='w-screen flex justify-start items-center min-h-[300px] gap-[180px] max-[1030px]:gap-[140px] max-[955px]:gap-[110px] max-[890px]:gap-[80px] max-[771px]:gap-[50px] max-[715px]:flex-wrap max-[815px]:pl-[50px] max-[378px]:px-[30px] p-[50px] pl-[100px]'>
                  <div className='flex flex-col w-[47.5%] max-[1030px]:w-[52%] max-[890px]:w-[55%] max-[715px]:w-[95%]'>
                      <h1 className='font-semibold text-4xl mb-3'
                      style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
                      >
                          Infrastructure et structure
                      </h1>
                      <p className='text-[16.5px] pt-[30px] font-medium text-justify'>
                          L'infrastructure désigne la partie des ouvrages se trouvant dans le sol(fondations, la reservation soutérraine, ouvrages entérées). 
                          La structure est la partie hors sol de votre projet
                      </p>
                  </div>
                  <div className='relative shrink-0  max-[485px]:self-center w-[300px] h-[270px] max-[1030px]:h-[220px] max-[1030px]:w-[250px] max-[890px]:w-[230px] max-[890px]:h-[200px]'>
                      <div style={{background:"url('https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1692796102/infrastructures_v1w1ev.jpg')", backgroundSize:'cover', backgroundPosition:'center'}} className='absolute w-[100%] h-[100%] z-20 flex justify-center items-center '>
                      </div>
                      <div className="w-[100%] h-[100%] bg-[#222A35] absolute top-[9%] left-[9%] z-10"></div>
                  </div>
              </div>
              <div className='w-screen flex flex-row-reverse max-[715px]:flex-row justify-start items-center min-h-[300px] gap-[180px] max-[1030px]:gap-[140px] max-[955px]:gap-[110px] max-[890px]:gap-[80px] max-[771px]:gap-[50px] max-[715px]:flex-wrap max-[815px]:pl-[50px] max-[378px]:px-[30px] p-[50px] pl-[100px]' >
                  <div className='flex flex-col w-[47.5%] max-[1030px]:w-[52%] max-[890px]:w-[55%] max-[715px]:w-[95%]'>
                      <h1 className='font-semibold text-4xl mb-3'
                      style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
                      >
                          Plomberie
                      </h1>
                      <p className='text-[16.5px] pt-[30px] font-medium text-justify'>
                          Chez nous, nous avons des experts du domaine de plomberie (batiments et industriels); nous exerçons principalement
                          des travaux d'évacuation d'eau, reserves d'eau, alimentation en eaux chaudes, froides, installations sanitaires et entretiens, forages d'eau
                      </p>
                  </div>
                  <div className='relative shrink-0  max-[485px]:self-center w-[300px] h-[270px] max-[1030px]:h-[220px] max-[1030px]:w-[250px] max-[890px]:w-[230px] max-[890px]:h-[200px]'>
                  <div style={{background:"url('https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693123839/RESERVATION-EN-PLOMBERIE_ti4dan.jpg')", backgroundSize:'cover', backgroundPosition:'center'}} className='absolute w-[100%] h-[100%] z-20 flex justify-center items-center '>
                      </div>
                      <div className="w-[100%] h-[100%] bg-[#222A35] absolute top-[9%] left-[9%] z-10"></div>
                  </div>
              </div>
              <div className='w-screen flex justify-start items-center min-h-[300px] gap-[180px] max-[1030px]:gap-[140px] max-[955px]:gap-[110px] max-[890px]:gap-[80px] max-[771px]:gap-[50px] max-[715px]:flex-wrap max-[815px]:pl-[50px] max-[378px]:px-[30px] p-[50px] pl-[100px]'>
                  <div className='flex flex-col w-[47.5%] max-[1030px]:w-[52%] max-[890px]:w-[55%] max-[715px]:w-[95%]'>
                      <h1 className='font-semibold text-4xl mb-3'
                      style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
                      >
                          Electricité et Réseaux
                      </h1>
                      <p className='text-[16.5px] pt-[30px] font-medium text-justify'>
                          Suffisament équipé, notre équipe professionael intervient dans plusieurs tâches : Courant fort et faible, Energie renouvelable, froid et climatisation
                      </p>
                  </div>
                  <div className='relative shrink-0   max-[485px]:self-center w-[300px] h-[270px] max-[1030px]:h-[220px] max-[1030px]:w-[250px] max-[890px]:w-[230px] max-[890px]:h-[200px]'>
                  <div style={{background:"url('https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693123417/20200226_103655-300x240_sk8ssv.jpg')", backgroundSize:'cover', backgroundPosition:'center'}} className='absolute w-[100%] h-[100%] z-20 flex justify-center items-center '>
                      </div>
                      <div className="w-[100%] h-[100%] bg-[#222A35] absolute top-[9%] left-[9%] z-10"></div>
                  </div>
              </div>
              <div className='w-screen flex flex-row-reverse max-[715px]:flex-row justify-start items-center min-h-[300px] gap-[180px] max-[1030px]:gap-[140px] max-[955px]:gap-[110px] max-[890px]:gap-[80px] max-[771px]:gap-[50px] max-[715px]:flex-wrap max-[815px]:pl-[50px] max-[378px]:px-[30px] p-[50px] pl-[100px]'>
                  <div className='flex shrink-0 flex-col w-[47.5%] max-[1030px]:w-[52%] max-[890px]:w-[55%] max-[715px]:w-[95%]'>
                      <h1 className='font-semibold text-4xl mb-3'
                      style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
                      >
                          Ménuiserie
                      </h1>
                      <p className='text-[16.5px] pt-[30px] font-medium text-justify'>
                          Pour les travaux de menuiserie, nous sommes spécialisés dans le matériau bois, métal, aluminium. 
                          Ils sont pour la plupart utilisés pour la fabrication des baies (main courante, escalier, hangar, meubles, étagers) 
                      </p>
                  </div>
                  <div className='relative shrink-0   max-[485px]:self-center w-[300px] h-[270px] max-[1030px]:h-[220px] max-[1030px]:w-[250px] max-[890px]:w-[230px] max-[890px]:h-[200px]'>
                  <div style={{background:"url('https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693123335/imagination-vous-emm_C3_A8ne-partout_irlyun.jpg')", backgroundSize:'cover', backgroundPosition:'top right'}} className='absolute w-[100%] h-[100%] z-20 flex justify-center items-center '>
                      </div>
                      <div className="w-[100%] h-[100%] bg-[#222A35] absolute top-[9%] left-[9%] z-10"></div>
                  </div>
              </div>
              
          </div>
      </div>
    )
  }
  
  export default Realisation