import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
    return [
      { title: "Gold Building BTP - Conceptions" },
      { name: "description", content: 'Explorez nos conceptions et peut être vous trouverez votre futur batiment'}
    ];
  }

const Conceptions = () => {
  const imgsFerme = [
    'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839255/FERME_1_x9txxo.avif',
    'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839592/FERME_2_kcuhj2.avif',
    'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839328/FERME_4_re0bzv.avif',
    'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839356/FERME_5_hyl3mi.avif',
    ]
    const imgsPorc = [
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839396/OK_ggz9yt.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839193/porc_11_z4zkbp.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839495/porc_22_n9nywv.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839544/porc_33_hwbpnt.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839573/porc_44_pjeh7c.avif',
    ]
    const imgsDuplex = [
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839846/Image1_gpekr1.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839851/Image3_fbxpgy.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839870/Image4_wnf2p8.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839880/Image8_xlvics.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693189707/4_pqciuj.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693189642/2_akenew.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693189606/5_p0llqa.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693188890/5_aakpwq.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693189616/1_630862543658946_qnpaqz.avif'
    ]
    const imgsImmeubles = [
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839996/Z7_zkwmlr.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839998/22_qhu7be.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693191150/11_1358823696986406_jhejox.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693191134/4_k4hmjx.avif',
    ]
    const imgsPlainpied = [
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692840104/1_3_-_Photo_rcxkir.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692840096/1_7_-_Photo_lcxiuh.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692840149/3D_h2tl2w.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1693191790/F1_2_-_Photo_OK2_hlclb4.avif',
    ]
    const imgsVillas = [
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692840282/bil-house4_ivreiv.avif',
        'https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692840279/bil-house1_kltcxw.avif',
    ]
  return (
    <>
      <div id='batiments-agricoles ' className="w-screen pl-[100px] p-[50px] max-[565px]:px-[30px] box-border overflow-hidden">
          <h1 className='text-[34px] max-[428px]:text-[28px]  text-[#dfc73e] font-medium'>
              BATIMENTS AGRICOLES
          </h1>
          <div>
              <h1 className='text-[34px] max-[428px]:text-[28px] text-[#dfc73e] font-medium'>
                  Fermes
              </h1>
              <div className='flex flex-wrap justify-between' style={{rowGap:'14px'}} >
                  {imgsFerme.map((img,index)=>(<img className='w-[23.5%] max-[820px]:w-[48.5%] max-[440px]:w-[100%] h-[250px] object-cover ' src={img} key={index} alt={"Ferme"}/>))}
              </div>
          </div>
          <div>
              <h1 className='text-[34px] max-[428px]:text-[28px] text-[#dfc73e] font-medium'>
                  Porcs
              </h1>
              <div className='flex flex-wrap justify-between ' style={{rowGap:'14px'}} >
                  {imgsPorc.map((img,index)=>(<img className='w-[19%] max-[820px]:w-[48.5%] max-[440px]:w-[100%] h-[250px] object-cover ' src={img} key={index} alt={"Porc"}/>))}
              </div>
          </div>
      </div>
      <div id='duplex' style={{rowGap:'14px'}} className="w-screen p-[50px] max-[565px]:px-[30px] pt-3 box-border overflow-hidden pl-[100px]">
          <h1 className='text-[34px] max-[428px]:text-[28px] text-[#dfc73e] font-medium'>
              DUPLEX
          </h1>
          <div>
              <div className='flex flex-wrap justify-between' style={{rowGap:'14px'}}>
                  {imgsDuplex.map((img,index)=>(<img className='w-[23.5%] max-[820px]:w-[48.5%] max-[440px]:w-[100%] h-[250px] object-cover' src={img} key={index} alt={"duplex"}/>))}
              </div>
        </div>
      </div>
      <div id='immeubles' style={{rowGap:'14px'}} className="w-screen p-[50px] max-[565px]:px-[30px] pt-3 box-border overflow-hidden pl-[100px]">
          <h1 className='text-[34px] max-[428px]:text-[28px] text-[#dfc73e] font-medium'>
              IMMEUBLES
          </h1>
          <div>
              <div className='flex flex-wrap justify-between' style={{rowGap:'14px'}}>
                  {imgsImmeubles.map((img,index)=>(<img className='w-[23.5%] max-[820px]:w-[48.5%] max-[440px]:w-[100%] h-[250px] object-cover' src={img} key={index} alt={"immeuble"}/>))}
              </div>
        </div>
      </div>
      <div id='plain-pieds' style={{rowGap:'14px'}} className="w-screen p-[50px] max-[565px]:px-[30px] pt-3 box-border overflow-hidden pl-[100px]">
          <h1 className='text-[34px] max-[428px]:text-[28px] text-[#dfc73e] font-medium'>
              PLAINS PIED
          </h1>
          <div>
              <div className='flex flex-wrap justify-between' style={{rowGap:'14px'}}>
                  {imgsPlainpied.map((img,index)=>(<img className='w-[23.5%] max-[820px]:w-[48.5%] max-[440px]:w-[100%] h-[250px] object-cover' src={img} key={index} alt={"plain-pied"}/>))}
              </div>
          </div>
      </div>
      <div id='villas' style={{rowGap:'14px'}} className="w-screen p-[50px] max-[565px]:px-[30px] pt-3 box-border overflow-hidden pl-[100px]">
          <h1 className='text-[34px] text-[#dfc73e] font-medium'>
              VILLAS
          </h1>
          <div>
              <div className='flex flex-wrap gap-2' style={{rowGap:'14px'}}>
                  {imgsVillas.map((img,index)=>(<img className='w-[23.5%] max-[820px]:w-[48.5%] max-[440px]:w-[100%] h-[250px] object-cover' src={img} key={index} alt={"villa"}/>))}
              </div>
          </div>
      </div>
    </>
  )
}

export default Conceptions