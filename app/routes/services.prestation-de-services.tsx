import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
    return [
      { title: "Services - Prestation de services" }
    ];
  }

const Prestation = () => {
    return (
      <div>
          <div className="w-screen h-[80vh] max-[350px]:h-[70vh] rounded-none flex flex-wrap relative">
              <div className="w-[100%] h-[100%] p-[90px] max-[815px]:px-[50px] max-[378px]:px-[30px] flex flex-col justify-end gap-[40px] absolute top-0 left-0 bg-black bg-opacity-50 z-100 ">
                  <h1 className='text-[90px] font-semibold text-[#dfc73e] max-[1045px]:text-[80px] max-[975px]:text-[75px] max-[925px]:text-[68px] max-[855px]:text-[62px] max-[580px]:text-[55px] max-[535px]:text-[48px] max-[450px]:text-[43px] max-[338px]:text-[39px]'>
                      Prestation de services
                  </h1>
                  <p className='font-medium text-white text-[22px] max-[490px]:text-[18px]'>Consultez nos services dans vos projets notamment un suivi approché, la vente et la location des matériaux pour votre chantier et bien plus..</p>
              </div>
              <img src="https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693137431/GC_gzygik.jpg" className='h-full  w-full object-cover ' />
          </div>
          <div>
              <div className='w-screen flex  justify-start items-center min-h-[300px] gap-[180px] max-[1030px]:gap-[140px] max-[955px]:gap-[110px] max-[890px]:gap-[80px] max-[771px]:gap-[50px] max-[715px]:flex-wrap max-[815px]:pl-[50px] max-[378px]:px-[30px] p-[50px] py-[30px] pl-[100px]'>
                  <div className='flex flex-col w-[47.5%] max-[1030px]:w-[52%] max-[890px]:w-[55%] max-[715px]:w-[95%]'>
                      <h1 className='font-semibold text-4xl mb-3'
                      style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
                      >
                          Cabinet de conseil et suivi
                      </h1>
                      <p className='text-[16.5px] pt-[30px] font-medium text-justify'>
                      Nous vous apportons des conseils stratégiques et opérationnels pour vos projets de construction, afin d'optimiser leurs activités et à atteindre leurs objectifs.
                      </p>
                  </div>
                  <div className='relative shrink-0  max-[485px]:self-center w-[300px] h-[270px] max-[1030px]:h-[220px] max-[1030px]:w-[250px] max-[890px]:w-[230px] max-[890px]:h-[200px]'>
                      <div style={{background:"url('https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693138126/ingenieur-en-genie-civil-1_s3duxi.jpg')", backgroundSize:'cover', backgroundPosition:'center'}} className='absolute w-[100%] h-[100%] z-20 flex justify-center items-center '>
                      </div>
                      <div className="w-[100%] h-[100%] bg-[#222A35] absolute top-[9%] left-[9%] z-10"></div>
                  </div>
              </div>
              <div className='p-[50px] py-[30px] pl-[100px] max-[815px]:pl-[50px] max-[378px]:px-[30px]'>
                  <p className='text-[30px] font-semibold mb-8 max-[355px]:mb-5' style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text' }}>
                  Vente de matériaux de construction
                  </p>
                  <p className='font-medium text-[16.5px] mb-8  max-[355px]:mb-5'>Nous vous fournissons les matériaux nécessaires à la réalisation des projets de construction.</p>
                  {/* <p className='font-medium mb-8  max-[355px]:mb-5 text-[16.5px]'>Les plans 3D quant à eux vous donnent une vue en élévation de votre projet, ils vous projettent et vous présentent votre projet sous différents angles; ils vous donnent un aperçu final du rendu attendu </p> */}
                  <div className='flex flex-wrap gap-6 justify-center'>
                      <div className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%] ">
                          <div className='w-[100%] h-[80%] relative overflow-hidden group/first hover:cursor-pointer'>
                              <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/first:block '></div>
                              <img className='w-[100%] h-[100%] object-cover group-hover/first:bg-opacity-60 duration-500 group-hover/first:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693024074/IMG_20230327_115542_qg8lxh.jpg" alt="Céramiques" />
                          </div>
                          {/* <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Batiments agricoles</p> */}
                      </div>
                      <div className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%]">
                          <div className='w-[100%] h-[80%] relative overflow-hidden group/second hover:cursor-pointer'>
                              <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/second:block '></div>
                              <img className='w-[100%] h-[100%] object-cover duration-500 group-hover/second:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693024053/IMG_20230327_115554_lapf2h.jpg" alt="Céramiques" />
                          </div>
                          {/* <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Duplex</p> */}
                      </div>
                      <div className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%]">
                          <div className='w-[100%] h-[80%] relative overflow-hidden group/third hover:cursor-pointer'>
                              <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/third:block '></div>
                              <img className='w-[100%] h-[100%] object-cover group-hover/third:bg-opacity-60 duration-500 group-hover/third:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693024031/IMG_20230321_101640_o0t7kv.jpg" alt="Céramiques" />
                          </div>
                          {/* <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Immeubles</p> */}
                      </div>
                      <div className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%]">
                          <div className='w-[100%] h-[80%] relative overflow-hidden group/fourth hover:cursor-pointer' > 
                              <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/fourth:block '></div>
                              <img className='w-[100%] h-[100%] object-cover group-hover/fourth:bg-opacity-60 duration-500 group-hover/fourth:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693023988/IMG_20230327_115537_sz9omn.jpg" alt="Céramiques" />
                          </div>
                          {/* <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Plains pieds</p> */}
                      </div>
                      <div className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%]">
                          <div className='w-[100%] h-[80%] relative overflow-hidden group/fifth hover:cursor-pointer'>
                              <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/fifth:block '></div>
                              <img className='w-[100%] h-[100%] object-cover group-hover/fifth:bg-opacity-60 duration-500 group-hover/fifth:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693023988/IMG_20230327_115310_do8ldy.jpg" alt="Céramiques" />
                          </div>
                          {/* <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Villas</p> */}
                      </div>
                  </div>
              </div>
              <div className='w-screen flex justify-start items-center min-h-[300px] gap-[180px] max-[1030px]:gap-[140px] max-[955px]:gap-[110px] max-[890px]:gap-[80px] max-[771px]:gap-[50px] max-[715px]:flex-wrap max-[815px]:pl-[50px] max-[378px]:px-[30px] p-[50px] pt-[20px] pl-[100px]'>
                  <div className='flex flex-col w-[47.5%] max-[1030px]:w-[52%] max-[890px]:w-[55%] max-[715px]:w-[95%]'>
                      <h1 className='font-semibold text-4xl mb-3'
                      style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
                      >
                          Location des matériaux
                      </h1>
                      <p className='text-[16.5px] pt-[30px] font-medium text-justify'>
                      Nous mettons à votre disposition des équipements et des matériaux de construction nécessaires pour mener à bien vos projets, 
                      ce qui vous permettra de bénéficier de l'utilisation temporaire des équipements sans avoir à supporter les coûts d'achat et d'entretien à long terme.
                      </p>
                  </div>
                  <div className='relative shrink-0   max-[485px]:self-center w-[300px] h-[270px] max-[1030px]:h-[220px] max-[1030px]:w-[250px] max-[890px]:w-[230px] max-[890px]:h-[200px]'>
                  <div style={{background:"url('https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1693153713/AF1QipMySXZmjCNYB6EdnnIGeFhts67SBzN52afVBIIw1600-h1000-k-no_upsnia.jpg')", backgroundSize:'cover', backgroundPosition:'center'}} className='absolute w-[100%] h-[100%] z-20 flex justify-center items-center '>
                      </div>
                      <div className="w-[100%] h-[100%] bg-[#222A35] absolute top-[9%] left-[9%] z-10"></div>
                  </div>
              </div>     
          </div>
      </div>
    )
  }
  
  export default Prestation