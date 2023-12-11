
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from './actions';
import './App.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState({ id: null, text: '' });

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdateTodo = () => {
    if (editingTodo.text.trim() !== '') {
      dispatch(updateTodo(editingTodo.id, editingTodo.text));
      setEditingTodo({ id: null, text: '' });
    }
  };

  const startEditing = (id, text) => {
    setEditingTodo({ id, text });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo.id === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingTodo.text}
                  onChange={(e) => setEditingTodo({ id: todo.id, text: e.target.value })}
                />
                <button onClick={handleUpdateTodo}>Update</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
