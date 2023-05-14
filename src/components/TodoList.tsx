import React, { ChangeEvent, useEffect, useState } from 'react';
import ITodoItem from '../types/todoItem';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (inputValue) {
        const newTodo: ITodoItem = {
          id: Date.now(),
          title: inputValue,
          isCompleted: false
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setInputValue(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = (id: number) => {
    try {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='todo-list'>
      <h1>TODO LIST</h1>

      {/* Todo Input Form */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputOnChange}
          className="todo-input"
          placeholder="Add new task"
        />
        <button type="submit" className='add-btn'>Add</button>
      </form>

      {/* Todo Items */}
      {todos && todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))
      ) : (
        <li>The todo list is empty</li>
      )}
    </div>
  );
};

export default TodoList;
