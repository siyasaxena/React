// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// export default function TodoList() {
//   let [todos, setTodos] = useState(["sample Task"]);
//   let [newTodo, setNewTodo] = useState("");

//   let addNewTask = () => {
//     setTodos([...todos, newTodo]);
//     setNewTodo("");
//   };
//   let updateTodoValue = (event) => {
//     setNewTodo(event.target.value);
//   };
//   return (
//     <div className="todo-list">
//       <input
//         placeholder="add a task"
//         value={newTodo}
//         onChange={updateTodoValue}
//       />
//       <br></br>
//       <br></br>

//       <button onClick={addNewTask}>ADD Task</button>
//       <br></br>
//       <br></br>
//       <br></br>

//       <hr></hr>
//       <h1>Todo List</h1>
//       <ul>
//         {todos.map((task) => (
//           <li>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//using unique id for each task
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// export default function TodoList() {
//   let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
//   let [newTodo, setNewTodo] = useState("");

//   let addNewTask = () => {
//     setTodos([...todos, { task: newTodo, id: uuidv4() }]);
//     setNewTodo("");
//   };
//   let updateTodoValue = (event) => {
//     setNewTodo(event.target.value);
//   };
//   return (
//     <div className="todo-list">
//       <input
//         placeholder="add a task"
//         value={newTodo}
//         onChange={updateTodoValue}
//       />
//       <br></br>
//       <br></br>

//       <button onClick={addNewTask}>ADD Task</button>
//       <br></br>
//       <br></br>
//       <br></br>

//       <hr></hr>
//       <h1>Todo List</h1>
//       <ul>
//         {todos.map((task) => (
//           <li key={task.id}>{task.task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// delete from arrays
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), completed: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() === "") return; // Prevent adding empty tasks
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), completed: false }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    //console.log("task to be deleted");
    setTodos((prevArr) => prevArr.filter((task) => task.id !== id));
  };
  let upperCaseAll = () => {
    setTodos((todos) =>
      todos.map((task) => {
        return {
          ...task,
          task: task.task.toUpperCase(),
        };
      }),
    );
  };
  let upperCaseOne = (id) => {
    setTodos((todos) =>
      todos.map((task) => {
        if (task.id == id) {
          return {
            ...task,
            task: task.task.toUpperCase(),
          };
        } else {
          return task;
        }
      }),
    );
  };
  let completionOne = (id) => {
    console.log("task completed");
    setTodos((todos) =>
      todos.map((task) => {
        if (task.id == id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    );
  };
  let completionAll = () => {
    console.log("task completed");
    setTodos((todos) =>
      todos.map((task) => {
        return {
          ...task,
          completed: !task.completed,
        };
      }),
    );
  };

  return (
    <div className="todo-list">
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br></br>
      <br></br>

      <button onClick={addNewTask}>ADD Task</button>
      <br></br>
      <br></br>
      <br></br>

      <hr></hr>
      <h1>Todo List</h1>
      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.task}
            </span>{" "}
            &nbsp; &nbsp;
            <button onClick={() => deleteTodo(task.id)}>delete</button>
            {/* arrow fns create a copy to delete,it will not unnecessarily call the deleteTodo function on every render, but only when the button is clicked. This is important because if you just passed deleteTodo(task.id) directly, it would execute immediately during rendering, which is not what you want. By using an arrow function, you ensure that deleteTodo is called only when the button is clicked, and it receives the correct id of the task to be deleted. */}
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(task.id)}>Uppercase</button>
            &nbsp;&nbsp;
            <input
              type="checkbox"
              onClick={() => completionOne(task.id)}
            ></input>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>Uppercase All</button>
      <br></br>
      <br></br>
      <button onClick={completionAll}>Complete All</button>
    </div>
  );
}
