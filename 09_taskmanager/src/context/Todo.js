import { useContext } from "react";
import { createContext } from "react";


export const Todocontext=createContext({
    todos:[{  id:1,
        title:"Buy Milk",
        completed:false},{}],
    addTodo:()=>{},
    deleteTodo:()=>{},
    editTodo:()=> {},
    toggleTodo:()=> {},
});

export const Todoprovider=Todocontext.Provider;

export default function useTodo(){
    return useContext(Todocontext)
}