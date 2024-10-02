import React, { useState } from 'react'
import useTodo from '../context/Todo';

function Inputtask() {

  const{addTodo}=useTodo();


  const [task,setTask]=useState("")



  const handlesubmit=(e)=>{
    e.preventDefault();
    if(task.trim()){
      addTodo({id:Date.now(),title:task,completed:false});
      setTask("");
    }
  }
  return (
    <>
    <div className='flex justify-center p-3 bg-emerald-200'>
    <form onSubmit={handlesubmit}>
        <input type="text" name="task" 
        className=' bg-slate-200 min-w-72 border-gray-600  rounded-xl p-1'
         placeholder='write your task here......' 
         value={task}
        onChange={(e)=>setTask(e.target.value)}
        />
        <button className='p-1 bg-slate-500 ml-1 rounded-2xl' type='submit'>ADD</button>
    </form>
    </div>
    
    
    </>
  )
}

export default Inputtask