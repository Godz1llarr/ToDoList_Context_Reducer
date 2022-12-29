import React, { useState} from "react";
import { useTodo } from "./TodoContext";

function Todoform() {
  const {addTodo} = useTodo();
  const [todoContent, setTodoContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoContent)
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoContent}
        onChange={(e) => setTodoContent(e.target.value)}
        placeholder="Type in Something..."
      />
    </form>
  );
}

export default Todoform;
