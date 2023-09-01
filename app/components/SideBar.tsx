import { useState, useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { GrCircleInformation } from 'react-icons/gr'
import { AiFillPhone, AiFillProject } from 'react-icons/ai'
import { BiImageAlt } from 'react-icons/bi'
import { Flowbite, Modal } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { NavLink } from '@remix-run/react';
import { ToggleNavbarContext } from '~/context/ToggleSidebarContext';

//@ts-ignore
const SideBar = () => {
    const { isShowed, toggle } = useContext(ToggleNavbarContext)
    const [modalPlacement, setModalPlacement] = useState<string>('top-left');
    const props = { modalPlacement, isShowed, setModalPlacement, toggle };

    const customTheme: CustomFlowbiteTheme = {
        modal: {
            "content": {
                "base": "relative h-full w-full p-0 md:h-auto",
                "inner": "relative rounded-none bg-white shadow dark:bg-gray-700 flex flex-col h-[90vh]"
              },
              "body": {
                "base": "p-1 flex-1 overflow-auto",
                "popup": "pt-0"
              },
              "header": {
                "base": "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-1",
                "popup": " border-b-0",
                "title": "text-xl font-medium text-gray-900 dark:text-white",
                "close": {
                  "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                  "icon": "h-5 w-5"
                }
              },
        },
      };

    const navLinks = [
        {
            name:"Accueil",
            href:"/",
            icon:<FaHome className='inline mr-3'/>
        },
        {
            name:"A propos",
            href:"/a-propos",
            icon:<GrCircleInformation className='inline mr-3'/>
        },
        {
            name:"Projets",
            href:"/projets",
            icon:<AiFillProject className='inline mr-3'/>
        },
        {
            name:"Contacts",
            href:"/contacts",
            icon:<AiFillPhone className='inline mr-3'/>
        },
        {
            name:"Conceptions",
            href:"/conceptions",
            icon:<BiImageAlt className='inline mr-3'/>
        }
    ]
  return (
    <Flowbite theme={{ theme: customTheme }}>
        <Modal
            show={props.isShowed === true}
            position={props.modalPlacement}
            onClose={() => props.toggle()}
        >
            <Modal.Header></Modal.Header>
            <Modal.Body>
            <img src="/logo-sans-fond.png" className='w-[100px] h-[100px] object-cover' alt="Logo"/>
            <div className="flex flex-col">
                {navLinks.map((link) => {
                    return (
                        <NavLink
                            to={link.href}
                            key={link.name}
                            onClick={()=>props.toggle()}
                            className={ ({ isActive, isPending }) => isActive ? 'p-4 text-[#dfc73e] text-[17px] font-medium' : 'text-black p-4 font-medium text-[17px]'}
                            >
                            {link.icon}{link.name}
                        </NavLink>   
                    )
                })}
            </div>
            </Modal.Body>
        </Modal>
      </Flowbite>
  )
}

export default SideBar
                