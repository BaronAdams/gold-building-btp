import { createContext, useState, useEffect, ReactNode } from "react";

interface IProps{
    isShowed:boolean;
    toggle:()=>void;
}

//@ts-ignore
export const ToggleNavbarContext = createContext<IProps>()

export const DarkLightContextProvider = ({children}:{children : ReactNode}) => {
    const [isShowed, setIsShowed] = useState(false)

    const toggle = ()=>{
        setIsShowed(!isShowed)
    }

   return(
    <ToggleNavbarContext.Provider value={{ isShowed, toggle }}>
        {children}
    </ToggleNavbarContext.Provider>
   )

}