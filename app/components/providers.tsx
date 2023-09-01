import React from 'react'
import { DarkLightContextProvider } from '~/context/ToggleSidebarContext'

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
      <DarkLightContextProvider>  
        {children}
      </DarkLightContextProvider>
  )
}

export default Providers