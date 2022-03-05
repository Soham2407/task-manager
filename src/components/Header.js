import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const Header = ({
  tasks,
  setTasks,
  handleCheck,
  handleDelete,
  enteredTask,
  setEnteredTask,
  handleSubmit,
  handleEdit,
  mode,
}) => {
  return (
    <div className="w-75 mx-auto mt-2">
      <h1>Task Manager</h1>
      <AddTask
        enteredTask={enteredTask}
        setEnteredTask={setEnteredTask}
        handleSubmit={handleSubmit}
        mode={mode}
      />
      {tasks.length ? (
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <p>There is no Tasks</p>
      )}
    </div>
  );
};

export default Header;
