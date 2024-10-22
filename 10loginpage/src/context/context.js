import { useContext } from "react";
import { createContext} from "react";

export const context=createContext({
    theme:"light",
    dark:()=>{},
    light:()=>{},
})
export const Contextprovider1=context.Provider();


export default function useThis(){
    return useContext(context);
}