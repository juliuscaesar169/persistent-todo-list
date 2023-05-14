import React, { ChangeEvent, useEffect, useState } from 'react';
import ITodoItem from '../types/todoItem';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<any>();
  const [inputValue, setInputValue] = useState<string>('');

 /** get todos from local storage */
  useEffect(() => {
    try {
        const storedTodos = localStorage.getItem('todos')
        if (storedTodos) setTodos(JSON.parse(storedTodos))
    } catch (error) {
        console.log(error);
    }
  },[])

  /** set todos to local storage */
  useEffect(() => {
    try {
        const newTodos = JSON.stringify(todos)
        if (newTodos) localStorage.setItem('todos', newTodos)
    } catch (error) {
        console.log(error);
    }
  },[todos])

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

  const handleDelete = (id: number) => {
    try {
      const updatedTodos = todos.filter((todo: ITodoItem) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = (id: number) => {
    try {
      const updatedTodos = todos.map((todo: ITodoItem) => {
        return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      });
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
        <button type="submit" className='std-btn'>Add</button>
      </form>


      {/* Todo Items */}
      {todos && todos.length > 0 ? (
        todos.map((todo: ITodoItem) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p>The todo list is empty</p>
      )}
    </div>
  );
};

export default TodoList;
