import React, {  useState } from 'react'
import { createContext } from 'react'

export const LgnContext= createContext();

export default function Context({children}) {
  const[lang,setLang]=useState("english")



  return (
    <LgnContext.Provider value={[lang,setLang]}>
      {children}
    
    </LgnContext.Provider>
  )
}


