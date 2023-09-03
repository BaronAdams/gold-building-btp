import ProjectCard from '~/components/ProjectCard'
import { json, type V2_MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getProjects } from '~/services/project.server'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Gold Building BTP - Projets" },
    { name: "description", content: 'Consultez tous nos projets réalisés'}
  ];
}

export async function loader() {
  try {
    const projects = await getProjects()
    return json(projects)
  } catch (error) {
    return json(error,{status:500})
  }
}

const Projets = () => {
  const projects  = useLoaderData()
  const isGreat = projects?.length > 2 ? ' justify-between' : ' justify-start gap-4'
  return (
    <div className={'w-screen flex flex-wrap p-6 min-h-[80vh] justify-between '+ isGreat} style={{rowGap:'15px'}} >
      {//@ts-ignore
      projects?.length ? (projects.map((p)=>(<ProjectCard key={p._id} data={p}/>))) : (<p className='text-[40px] font-semibold'
      style={{background:'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)', WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text' }}
      >Aucun projet en cours</p>)}
    </div>
  )
}

export default Projets