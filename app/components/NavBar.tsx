import { useState, useContext } from 'react'
import { Link, NavLink, useLocation } from '@remix-run/react';
import { FiMenu } from 'react-icons/fi'
import { ToggleNavbarContext } from '~/context/ToggleSidebarContext';

export default function NavBar() {
    const [isHover, setIsHover] = useState<boolean>(false)
    const { toggle } = useContext(ToggleNavbarContext)
    const pathname = useLocation()?.pathname

    const navLinks = [
        {
            name:"Accueil",
            href:"/"
        },
        {
            name:"A propos",
            href:"/a-propos"
        },
        {
            name:"Projets",
            href:"/projets"
        },
        {
            name:"Contacts",
            href:"/contacts"
        },
        {
            name:"Conceptions",
            href:"/conceptions"
        }
    ]
    return (
        <div className='w-screen fixed bg-white z-50 px-12 max-[650px]:px-8 h-[10vh] flex justify-between items-center shadow-xl'>   
            <FiMenu className='text-[20px] hidden hover:cursor-pointer active:cursor-pointer max-[794px]:block' onClick={()=>toggle()}/>    
            <img
            alt="Gold Building BTP Logo"
            className="h-[90px] w-[90px] max-[280px]:h-[70px] max-[280px]:w-[70px] object-cover"
            src="/logo-sans-fond.png"
            />
            <div className='max-[794px]:hidden'>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                    <Link
                        to={link.href}
                        key={link.name}
                        style={{background: isActive ? 'linear-gradient(90deg,#000 0%, #93731B 50%, #dfc73e 100%)' :'none', WebkitTextFillColor:isActive ?'transparent': 'inherit', WebkitBackgroundClip: isActive ? 'text':'border-box' }}
                        className={ isActive ? 'p-4 text-[17px] font-medium' : 'text-black p-4 font-medium text-[17px]'}
                    >
                        {link.name}
                    </Link>
                    )
                })}
            </div>
            <Link onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} to={'/prennez-un-rdv'} className='text-sm max-[280px]:text[11.5px] max-[280px]:p-2 text-white font-medium p-3 rounded-md duration-500' style={{background: isHover ? 'linear-gradient(#dfc73e 0%, #000 50%,  #93731B 100%)' : 'linear-gradient(#000 0%, #93731B 50%, #dfc73e 100%)'}} >
                Prennez RDV 
            </Link>
        </div>
    )
}


