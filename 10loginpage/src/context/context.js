import { useContext } from "react";
import { createContext} from "react";

export const Context=createContext({
    theme:"light",
    dark:()=>{},
    light:()=>{},
})
export const Contextprovider1=Context.Provider;


export default function useThis(){
    return useContext(Context);
}