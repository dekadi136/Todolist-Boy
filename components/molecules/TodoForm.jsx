import { useState, useContext, useEffect } from 'react';
import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';
import { TodoContext } from '../../context/TodoContext';

export default function TodoForm() {
  const [task, setTask] = useState('');
  const {
    addTodo,
    editingTodo,
    updateTodo,
  } = useContext(TodoContext);

  useEffect(() => {
    if (editingTodo) {
      setTask(editingTodo.text);
    }
  }, [editingTodo]);

  const handleSubmit = () => {
    if (task.trim()) {
      if (editingTodo) {
        updateTodo(task);
      } else {
        addTodo(task);
      }
      setTask('');
    }
  };

  return (
    <>
      <TextInput
        value={task}
        onChangeText={setTask}
        placeholder="Todolist"
      />
      <Button
        title={editingTodo ? 'Update Todolist' : 'Tambahkan Todolist'}
        onPress={handleSubmit}
      />
    </>
  );
}
