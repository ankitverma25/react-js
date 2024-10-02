import { useContext } from "react";
import { createContext } from "react";


export const Todocontext=createContext({
    todo:[],
    addTodo:()=>{},
    deleteTodo:()=>{},
    editTodo:()=> {},
    toggleTodo:()=> {},
});

export const Todoprovider=Todocontext.Provider;

export default function usetodo(){
    return useContext(Todocontext)
}