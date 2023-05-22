import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

const addNewTask = (taskTitle: string) => {
  const AddTaskBtn = screen.getByTestId('add-new-task-btn');
  const MainInput = screen.getByPlaceholderText(/Add new task/i);
  MainInput.textContent = taskTitle;
  AddTaskBtn?.click();
};

xit('renders main input', () => {
  render(<TodoList />);
  const MainInput = screen.getByPlaceholderText(/Add new task/i);
  expect(MainInput).toBeInTheDocument();
});

xit('adds a new task', () => {
  const taskTitle = 'New TODO Task';
  render(<TodoList />);
  addNewTask(taskTitle);
  const newTask = screen.getByText(taskTitle);
  expect(newTask).toBeInTheDocument();
});
