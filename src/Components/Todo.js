import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrash2Fill } from "react-icons/bs";

const Todo = ({ todo, deleteBtn, editBtn, saveEdit }) => {
  const [newTask, setNewTask] = useState(todo.task);

  return (
    <div className="flex justify-between items-center bg-gray-500 text-white py-3 px-4 rounded-md mb-1 cursor-pointer">
      {todo.isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="bg-gray-700 text-white px-2 py-1 rounded"
        />
      ) : (
        <p className="font-primary">{todo.task}</p>
      )}
      <div className="flex items-center gap-x-4">
        {todo.isEditing ? (
          <button
            onClick={() => saveEdit(todo.id, newTask)}
            className="bg-green-500 text-white px-2 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <AiFillEdit className="text-xl" onClick={() => editBtn(todo.id)} />
        )}
        <BsFillTrash2Fill className="text-xl" onClick={() => deleteBtn(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
