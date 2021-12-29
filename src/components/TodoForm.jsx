import { useState, useEffect, useRef } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");
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
        placeholder="Add a todo"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;
