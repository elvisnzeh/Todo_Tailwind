import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [TodoValue, setTodo] = useState([]);

  const createTodo = (task) => {
    setTodo([...TodoValue, { id: uuidv4(), task, isEditing: false }]);
  };

  const deleteBtn = (id) => {
    setTodo(TodoValue.filter((todo) => todo.id !== id));
  };

  const editBtn = (id) => {
    setTodo(
      TodoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const saveEdit = (id, newTask) => {
    setTodo(
      TodoValue.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="container bg-blue-950 mt-28 p-8 rounded-md mx-auto">
      <Form createTodo={createTodo} />

      {TodoValue.map((todo, idx) => (
        <Todo
          todo={todo}
          key={idx}
          deleteBtn={deleteBtn}
          editBtn={editBtn}
          saveEdit={saveEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
