import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleCheck, handleDelete, handleEdit }) => {
  return (
    <div className="w-75 p-2">
      <ul className="list-group">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            handleEdit={handleEdit}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
