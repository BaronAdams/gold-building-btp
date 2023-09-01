import { Link } from '@remix-run/react';

interface IData{
    _id:string;
    projectImgs:string[];
    title:string;
}

const ProjectCard = ({data}:{data:IData}) => {
  return (
    <Link to={`/projets/${data._id}`} className='hover:bg-[#dfc73ebd] border-[3.5px] p-3 border-[#dfc73e] flex flex-col w-[31.5%] max-[820px]:w-[48.5%] max-[440px]:w-[100%] h-[280px] '>
        <img src={data.projectImgs[0]} className='object-cover w-full h-[70%] ' alt="Project banner" />
        <p className='font-medium'>{data.title}</p>
    </Link>
  )
}

export default ProjectCard