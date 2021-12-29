import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => setTodos((prev) => [...prev, newTodo]);

  const completeTodo = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        id === todo.id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || newValue.text.trim().length < 3) return;
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What's the plan for Today?</h1>
      <TodoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
