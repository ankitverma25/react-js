import { useState } from "react"
import { Todoprovider } from "./context/Todo"
import Inputtask from "./component/Inputtask";
import TodoList from "./component/TodoList";



function App() {

  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos([...todos,todo]);
  };

  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  }

  const editTodo=(id,updatedtext)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,title:updatedtext}:todo));
  }

  const toggleTodo=(id)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo));
  }


  return (
    <Todoprovider value={{todos,addTodo,deleteTodo,editTodo,toggleTodo}}>
      <div className=" bg-orange-500 p-5 flex justify-center">
        <h1 className="text-3xl font-bold underline">TO-DO</h1>  
      </div>
        <Inputtask/>
        <TodoList/>

     
    </Todoprovider>
  )
}

export default App
