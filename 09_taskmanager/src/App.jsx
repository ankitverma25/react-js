import { useState } from "react"
import { Todoprovider } from "./component/Todo"



function App() {

  const [todos,setTodos]=useState([{
    id:1,
    title:"Buy Milk",
    completed:false
  }])

  const addTodo=(todo)=>{
    setTodos([...todos,{todo}]);
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

     
    </Todoprovider>
  )
}

export default App
