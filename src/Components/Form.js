import React, { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const addValue = (e) => {
    setValue(e.target.value);
  };

  const addBtn = (e) => {
    e.preventDefault();
    if (value.trim()) {
      createTodo(value);
      setValue(""); // Clear the input after adding
    }
  };

  return (
    <form className="mb-4 font-primary w-full" onSubmit={addBtn}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
        placeholder="What task do you have today?"
        value={value}
        onChange={addValue}
      />
      <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">
        Add
      </button>
    </form>
  );
};

export default Form;
