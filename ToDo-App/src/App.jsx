import { useState } from "react";
import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./Styles/App.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handelNewItem = (itemName, itemDueDate) => {
    console.log(itemName, itemDueDate);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handelDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handelNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} handelDeleteClick={handelDeleteItem} />
    </center>
  );
}

export default App;
