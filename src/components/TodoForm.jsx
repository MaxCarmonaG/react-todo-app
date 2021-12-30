import { useState, useEffect, useRef } from "react";

const TodoForm = ({ addTodo, edit }) => {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input || input.trim().length < 3) return;

    addTodo({
      id: new Date().getTime(),
      text: input,
      isComplete: false,
    });

    setInput("");
  };

  const handleChange = (e) => setInput(e.target.value);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder={edit ? "Edit Todo" : "Add a todo"}
        className={edit ? "todo-input edit" : "todo-input"}
        onChange={handleChange}
        ref={inputRef}
      />
      <button className={edit ? "todo-button edit" : "todo-button"}>
        {edit ? "Edit Todo" : "Add Todo"}
      </button>
    </form>
  );
};

export default TodoForm;
