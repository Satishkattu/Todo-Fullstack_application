import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./services/todoService";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!title) return;
    await addTodo({ title, completed: false });
    setTitle("");
    loadTodos();
  };

  const toggle = async (todo) => {
    await updateTodo(todo.id, { ...todo, completed: !todo.completed });
    loadTodos();
  };

  const remove = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggle(t)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.title}
            </span>

            <button onClick={() => remove(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
