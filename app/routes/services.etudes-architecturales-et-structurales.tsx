import { Link } from '@remix-run/react'
import { HiClipboardDocumentList } from 'react-icons/hi2'
import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
    return [
      { title: "Services - Etudes architecturales et structurales" }
    ];
  }

const Etudes = () => {
  return (
    <div>
        <div className="w-screen h-[80vh] max-[350px]:h-[65vh] rounded-none flex flex-wrap relative">
            <div className="w-[100%] h-[100%] p-[90px] max-[815px]:px-[50px] max-[378px]:px-[30px] flex flex-col justify-end gap-[40px] absolute top-0 left-0 bg-black bg-opacity-50 z-100 ">
                <h1 className='text-[90px] text-[#dfc73e] font-semibold max-[1045px]:text-[80px] max-[975px]:text-[75px] max-[925px]:text-[68px] max-[855px]:text-[62px] max-[580px]:text-[55px] max-[535px]:text-[48px] max-[450px]:text-[43px] max-[338px]:text-[39px]'>
                    Etudes architecturales et structurales
                </h1>
                <p className='font-medium text-white text-[22px] max-[490px]:text-[18px]'>Faites l'etude de vos projets de construction(Plans, devis, dossiers, administratifs)</p>
            </div>
                <img src="https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692841292/Plan-appartement_nt8nys.avif" className='h-full  w-full object-cover ' />
        </div>
        <div>
            <div className='p-[50px] pl-[100px] max-[815px]:pl-[50px] max-[378px]:px-[30px]'>
                <p className='text-[30px] font-semibold mb-8 max-[355px]:mb-5' style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text' }}>
                    Plans 2D et 3D
                </p>
                <p className='font-medium text-[16.5px]'>Les plans 2D sont utilisés pour la représentation simplifiée de votre projet, il s'agit d'une vue en plan de ce quoi ressemblera votre batiment</p>
                <p className='font-medium mb-8  max-[355px]:mb-5 text-[16.5px]'>Les plans 3D quant à eux vous donnent une vue en élévation de votre projet, ils vous projettent et vous présentent votre projet sous différents angles; ils vous donnent un aperçu final du rendu attendu </p>
                <div className='flex flex-wrap gap-6 justify-center'>
                    <Link to={'/conceptions#batiments-agricoles'} className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%] ">
                        <div className='w-[100%] h-[80%] relative overflow-hidden group/first hover:cursor-pointer'>
                            <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/first:block '></div>
                            <img className='w-[100%] h-[100%] object-cover group-hover/first:bg-opacity-60 duration-500 group-hover/first:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839255/FERME_1_x9txxo.avif" alt="Batiments agricoles" />
                        </div>
                        <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Batiments agricoles</p>
                    </Link>
                    <Link to={'/conceptions#duplex'} className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%]">
                        <div className='w-[100%] h-[80%] relative overflow-hidden group/second hover:cursor-pointer'>
                            <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/second:block '></div>
                            <img className='w-[100%] h-[100%] object-cover duration-500 group-hover/second:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839884/1_dadnnn.avif" alt="Duplex" />
                        </div>
                        <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Duplex</p>
                    </Link>
                    <Link to={'/conceptions#duplex'} className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%]">
                        <div className='w-[100%] h-[80%] relative overflow-hidden group/third hover:cursor-pointer'>
                            <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/third:block '></div>
                            <img className='w-[100%] h-[100%] object-cover group-hover/third:bg-opacity-60 duration-500 group-hover/third:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/q_auto/v1692839998/22_qhu7be.avif" alt="Immeubles" />
                        </div>
                        <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Immeubles</p>
                    </Link>
                    <Link to={'/conceptions#duplex'} className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%]">
                        <div className='w-[100%] h-[80%] relative overflow-hidden group/fourth hover:cursor-pointer' > 
                            <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/fourth:block '></div>
                            <img className='w-[100%] h-[100%] object-cover group-hover/fourth:bg-opacity-60 duration-500 group-hover/fourth:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1692840104/1_3_-_Photo_rcxkir.jpg" alt="Plain pied" />
                        </div>
                        <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Plains pieds</p>
                    </Link>
                    <Link to={'/conceptions#duplex'} className="w-[200px] h-[240px] max-[765px]:w-[44%] max-[452px]:w-[95%]">
                        <div className='w-[100%] h-[80%] relative overflow-hidden group/fifth hover:cursor-pointer'>
                            <div className='hidden absolute w-[100%] h-[100%] z-20 bg-opacity-60 bg-black  group-hover/fifth:block '></div>
                            <img className='w-[100%] h-[100%] object-cover group-hover/fifth:bg-opacity-60 duration-500 group-hover/fifth:scale-150' src="https://res.cloudinary.com/drrquaosk/image/upload/f_auto,q_auto/v1692840282/bil-house4_ivreiv.jpg" alt="Villa" />
                        </div>
                        <p className='bg-[#222A35] text-center text-white pt-2 font-medium w-[100%] h-[20%]'>Villas</p>
                    </Link>
                </div>
            </div>
            <div className='w-screen flex justify-start items-center min-h-[400px] gap-[180px] max-[1030px]:gap-[140px] max-[955px]:gap-[110px] max-[890px]:gap-[80px] max-[771px]:gap-[50px] max-[715px]:flex-wrap p-[50px] pl-[100px] max-[815px]:pl-[50px] max-[378px]:px-[30px]'>
                <div className='flex shrink-0 flex-col w-[47.5%] max-[1030px]:w-[52%] max-[890px]:w-[55%] max-[715px]:w-[95%]'>
                    <h1 className='font-semibold text-4xl mb-3'
                    style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text'}}
                    >
                        Devis descriptif et quantitatif
                    </h1>
                    <p className='text-[16.5px] pt-[30px] font-medium text-justify'>Une fois la matérialisation du projet terminé, nous proposons à la demande du client un devis descriptif et quantitatif prennant en compte: Les phases d'exécution, les materiaux utilisés, le matériel, le planning. 
                        En gros, il s'agit de ressortir le coût budgétaire partiel ou global de votre projet</p>
                </div>
                <div className='relative shrink-0 max-[485px]:self-center w-[300px] h-[270px] max-[1030px]:h-[220px] max-[1030px]:w-[250px] max-[890px]:w-[230px] max-[890px]:h-[200px]'>
                    <div style={{background:'linear-gradient(90deg,#000 0%, #93731B 50%, #dfc73e 100%)'}} className='absolute w-[100%] h-[100%] z-20 flex justify-center items-center '>
                        <HiClipboardDocumentList className='block text-white text-[180px] max-[890px]:text-[150px]' />
                    </div>
                    <div className="w-[100%] h-[100%] bg-[#222A35] absolute top-[9%] left-[9%] z-10"></div>
                </div>
            </div>
            <div className='p-[50px] pl-[100px] max-[815px]:pl-[50px] max-[378px]:px-[30px]'>
                <p className='text-[30px] font-semibold mb-8 max-[355px]:mb-5' style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text' }}>
                    Dossiers administratifs
                </p>
                <p className='font-medium mb-8 max-[355px]:mb-5 text-[16.5px]'>Nous vous accompagnons dans le montage et l'obtention des documents tels que :</p>
                <span className='text-justify font-medium'></span>
                <ul className='pl-[60px] font-medium max-[378px]:pl-[40px]'>
                    <li><div className='w-2 h-2 inline-block bg-black mr-3'></div>Permis de construire, bâtir</li>
                    <li><div className='w-2 h-2 inline-block bg-black mr-3'></div>Certificat de propriété</li>
                    <li><div className='w-2 h-2 inline-block bg-black mr-3'></div>Permis d'implanter</li>
                    <li><div className='w-2 h-2 inline-block bg-black mr-3'></div>Autorisation de lôtir</li>
                    <li><div className='w-2 h-2 inline-block bg-black mr-3'></div>Certificat de conformité</li>
                    <li><div className='w-2 h-2 inline-block bg-black mr-3'></div>Certificat d'urbanisme</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Etudes