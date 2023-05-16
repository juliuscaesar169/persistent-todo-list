import React, { useState } from 'react';
import ITodoItem from '../types/todoItem';
import Button from '../commons/Button';

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
            <Button onClick={() => handleCancel()}>
              Cancel
            </Button>
            {/* Save btn */}
            <Button onClick={() => handleSave()}>
              Save
            </Button>
          </div>
        </>
      ) : (
        <>
          <div onClick={() => toggleComplete(todo.id)}>
            <p className={todo.isCompleted ? 'completed' : ''}>{todo.title}</p>
          </div>
          <div>
            {/* Edit btn */}
            <Button onClick={() => setEditing(true)}>
              Edit
            </Button>

            {/* Delete btn */}
            <Button className="std-btn" onClick={() => onDelete(todo.id)}>
              Delete
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
