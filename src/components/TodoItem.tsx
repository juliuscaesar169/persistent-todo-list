import React from 'react';
import ITodoItem from '../types/todoItem';

type Props = {
  todo: ITodoItem;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onDelete }: Props) => {
  return (
    <div className="listItem">
      {/* Checkbox */}

      {/* Editable todo item */}
      <p>{todo.title}</p>

      {/* Edit btn */}

      {/* Delete btn */}
      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
