import { createContext, useState } from 'react';

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null); // yang sedang diedit

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (editingTodo?.id === id) setEditingTodo(null); // kalau lagi diedit, cancel
  };

  const startEdit = (todo) => {
    setEditingTodo(todo);
  };

  const updateTodo = (text) => {
    setTodos(todos.map((todo) =>
      todo.id === editingTodo.id ? { ...todo, text } : todo
    ));
    setEditingTodo(null); // selesai edit
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, editingTodo, startEdit, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
