import React from 'react';
import useTodo from '../context/Todo';

function TodoList() {
  const { todos, deleteTodo, editTodo, toggleTodo } = useTodo();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => editTodo(todo.id, prompt("Edit task", todo.title))}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
