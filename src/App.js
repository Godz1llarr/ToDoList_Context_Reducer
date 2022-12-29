import "./App.css";
import Todo from "./Todo";
import { TodoProvider } from "./TodoContext";
import Todoform from "./TodoForm";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <Todoform />
        <Todo />
      </div>
    </TodoProvider>
  );
};

export default App;
