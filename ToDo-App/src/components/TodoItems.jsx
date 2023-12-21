import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, handelDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={handelDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
