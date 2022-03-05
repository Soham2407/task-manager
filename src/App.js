import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [enteredTask, setEnteredTask] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [mode, setMode] = useState("");
  const [editedTask, setEditedTask] = useState({});
  const [nightMode, setNightMode] = useState(false);

  const handleCheck = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };

  const addTask = (task) => {
    const newTask = {
      id: Math.random() * 10000,
      name: task,
      checked: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDelete = (id) => {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!enteredTask) return;
    if (mode === "edit") {
      const updatedTask = tasks.map((task) => {
        if (task.id === editedTask.id) {
          return {
            ...task,
            name: enteredTask,
          };
        } else {
          return task;
        }
      });
      setTasks(updatedTask);
      localStorage.setItem("tasks", JSON.stringify(updatedTask));
    } else {
      addTask(enteredTask);
    }
    setEnteredTask("");
  };

  const searchTask = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleEdit = (id) => {
    setMode("edit");
    const findEditTask = tasks.filter((task) => task.id === id);
    console.log(findEditTask);
    setEditedTask(...findEditTask);
    setEnteredTask(findEditTask[0].name);
  };

  const switchChangeHandler = () => {
    setNightMode(!nightMode);
  };

  return (
    <>
      <Navbar
        title="Task Manager"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        switchChangeHandler={switchChangeHandler}
        nightMode={nightMode}
      />
      <Header
        tasks={searchTask}
        setTasks={setTasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        enteredTask={enteredTask}
        setEnteredTask={setEnteredTask}
        handleSubmit={handleSubmit}
        handleEdit={handleEdit}
        mode={mode}
      />
    </>
  );
}

export default App;
