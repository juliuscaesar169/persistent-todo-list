import React, { ChangeEvent, useEffect, useState } from 'react';
import ITodoItem from '../types/todoItem';
import TodoItem from './TodoItem';
import TodoMainInputForm from './TodoMainInputForm';
import ErrorMessage from '../commons/ErrorMessage';

const TodoList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [todos, setTodos] = useState<any>();
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  /** get todos from local storage */
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) setTodos(JSON.parse(storedTodos));
    } catch (error) {
      setError('Failed to fetch todos');
    }
  }, []);

  /** set todos to local storage */
  useEffect(() => {
    try {
      const newTodos = JSON.stringify(todos);
      if (newTodos) localStorage.setItem('todos', newTodos);
    } catch (error) {
      setError('Failed setting todos');
    }
  }, [todos]);

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
      setError('Failed adding todo');
    }
  };

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setInputValue(e.target.value);
    } catch (error) {
      setError('Failed setting input');
    }
  };

  const handleDelete = (id: number) => {
    try {
      const updatedTodos = todos.filter((todo: ITodoItem) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      setError('Failed deleting todo');
    }
  };

  const handleComplete = (id: number) => {
    try {
      const updatedTodos = todos.map((todo: ITodoItem) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      setError('Failed changing todo status');
    }
  };

  const handleUpdate = ({ id, title }: ITodoItem) => {
    try {
      const updatedTodos = todos.map((todo: ITodoItem) => {
        return todo.id === id ? { ...todo, title } : todo;
      });
      setTodos(updatedTodos);
    } catch (error) {
      setError('Failed updating todo');
    }
  };

  return (
    <div className="todo-list">
      <h1>TODO LIST</h1>

      {/* Todo Input Form */}
      <TodoMainInputForm
        value={inputValue}
        addTodo={handleAddTodo}
        inputOnChange={handleInputOnChange}
      />

      {/* Error message */}
      {error && error.length > 0 && <ErrorMessage message={error} />}

      {/* Todo Items */}
      {todos && todos.length > 0 ? (
        todos.map((todo: ITodoItem) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={handleComplete}
            onUpdate={handleUpdate}
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
