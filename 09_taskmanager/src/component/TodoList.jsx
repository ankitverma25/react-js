import React from 'react';
import useTodo from '../context/Todo';

function TodoList() {
  const { todos, deleteTodo, editTodo, toggleTodo } = useTodo();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="text" value={todo.title} className={`${todo.completed?'line-through bg-slate-300':'bg-slate-300'} outline-none`} disabled={false} />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => toggleTodo(todo.id)}> 
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button disabled={todo.completed?true:false} onClick={() => editTodo(todo.id, prompt("Edit task", todo.title))}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
