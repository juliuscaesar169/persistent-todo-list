import React, { ChangeEvent } from 'react';
import Button from '../commons/Button';

type Props = {
  value: string;
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  inputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TodoMainInputForm = ({ value, addTodo, inputOnChange }: Props) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={value}
        onChange={inputOnChange}
        className="todo-input"
        placeholder="Add new task"
      />

      <Button onClick={() => addTodo}>Add</Button>
    </form>
  );
};

export default TodoMainInputForm;
