import { useContext } from "react";
import { createContext } from "react";

export const Themecontext=createContext({
    theme:"light",
    darktheme:()=>{},
    lighttheme:()=>{},
});

export const Themeprovider=Themecontext.Provider


export default function usetheme(){
    return useContext(Themecontext);
}