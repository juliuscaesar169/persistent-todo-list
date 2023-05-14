import React, { useState } from 'react';
import ITodoItem from '../types/todoItem';

type Props = {
  todo: ITodoItem;
  toggleComplete: (id: number) => void;
  onUpdate: (todo: ITodoItem) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, toggleComplete, onUpdate, onDelete }: Props) => {
  const [editedValue, setEditedValue] = useState<string>(todo.title);
  const [editing, setEditing] = useState<boolean>(false);

  const handleSave = () => {
    try {
      onUpdate({ ...todo, title: editedValue });
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    try {
      setEditedValue(todo.title);
      setEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="todo-item-container">
      {editing ? (
        <>
          <div>
            <input
              className="todo-update-input"
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
            />
          </div>
          <div>
            {/* Cancel btn */}
            <button className="std-btn" onClick={() => handleCancel()}>
              Cancel
            </button>
            {/* Save btn */}
            <button
              className="std-btn"
              type="submit"
              onClick={() => handleSave()}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div onClick={() => toggleComplete(todo.id)}>
            <p className={todo.isCompleted ? 'completed' : ''}>{todo.title}</p>
          </div>
          <div>
            {/* Edit btn */}
            <button className="std-btn" onClick={() => setEditing(true)}>
              Edit
            </button>

            {/* Delete btn */}
            <button className="std-btn" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
