import React, { ChangeEvent, useState } from 'react';
import ITodoItem from '../types/todoItem';

type Props = {
  todo: ITodoItem;
  toggleComplete: (id:number) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, toggleComplete, onDelete }: Props) => {
  return (
    <div className="todo-item">
      <div onClick={() => toggleComplete(todo.id)}>
      {/* Checkbox */}

      {/* Editable todo item */}
        <p className={todo.isCompleted ? 'completed' : ''}>{todo.title}</p>
      </div>
      <div>
        {/* Edit btn */}

        {/* Delete btn */}
        <button className='std-btn' onClick={() => onDelete(todo.id)}>
            Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
