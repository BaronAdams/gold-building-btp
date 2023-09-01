import type { LoaderArgs } from "@remix-run/node"
import { useLoaderData } from '@remix-run/react'
import { apiUrl } from "~/constants"

export async function loader({ params }: LoaderArgs) {
  try {
    const response = await fetch(`${apiUrl}/projects/${params.id}`,{
      method:'GET'
    })
    const res = await response.json()
    return { project: res.data }
  } catch (error) {
    console.log(error)
  }
}

const Project =  () => {
  const { project } = useLoaderData()
  console.log(project)
  const isGreat = project.projectImgs.length > 2 ? ' justify-between' : ' justify-start gap-4'
  return (
    <div className='min-h-[100vh] pb-[50px]'>
        <div className="w-screen h-[60vh] max-[350px]:h-[55vh] rounded-none flex flex-wrap relative">
            <div className="w-[100%] h-[100%] p-[90px] pb-[50px]  max-[815px]:px-[50px] max-[378px]:px-[30px] flex flex-col justify-end gap-[40px] absolute top-0 left-0 bg-black bg-opacity-50 z-100 ">
            <h1 className={`text-[80px] max-[1045px]:text-[62px] max-[909px]:text-[57px] max-[842px]:text-[50px] max-[591px]:text-[40px] max-[504px]:text-[35px] max-[304px]:text-[30px] text-white  font-semibold poppins`}>{project.title}</h1>
            </div>
                <img src={project.projectImgs[0]} alt='Project banner'  className='h-full w-full object-cover' />
        </div>
        <div className={'w-screen p-6 flex flex-wrap'+ isGreat } style={{rowGap:'14px'}} >
            {/*@ts-ignore */}
            {project.projectImgs?.map((img,index)=>(<img key={index} className='object-cover shrink-0 w-[31.5%] h-[240px] max-[820px]:w-[48.5%] max-[440px]:w-[100%]' src={img} alt={project.title+'_Image_'+index}/>))}
        </div>
    </div>
  )
}

export default Project