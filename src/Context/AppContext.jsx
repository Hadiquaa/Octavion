import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
   const [isDark , setIsDark] =useState(false);

   return (
      <AppContext.Provider value={{isDark, setIsDark}}>
         {children}
      </AppContext.Provider>
   )


}