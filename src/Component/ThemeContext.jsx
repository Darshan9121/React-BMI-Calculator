import { createContext, useContext, useState } from "react";


const ThemeCxt = createContext(null)

export const ThemeProvider = ({children})=>{
    const [isdarkmode,setdarkmode]=useState(true);
    const toggle = ()=>{
        setdarkmode(!isdarkmode);
        console.log(isdarkmode,"changed");
        
    }

    return (
        <ThemeCxt.Provider value={{theme:isdarkmode,toggle}}>
            {children}
        </ThemeCxt.Provider>
    )
}

export const useTheme = ()=>{
    const context = useContext(ThemeCxt);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

// export {ThemeProvider,useTheme}


