import React from "react";
import "../styles/Task.css";

const Task = ({ task, handleCheck, handleDelete, handleEdit }) => {
  return (
    <>
      <li
        className="list-group-item task-item d-flex justify-content-between align-items-center"
        aria-disabled="true"
      >
        <div className="form-check">
          <input
            className="form-check-input task-checkbox"
            type="checkbox"
            checked={task.checked}
            onChange={() => handleCheck(task.id)}
            id="flexCheckChecked"
          />
          <label
            className="form-check-label task-item-label"
            htmlFor="flexCheckChecked"
          >
            <p className={`task-text ${task.checked ? "task-underline" : ""}`}>
              {task.name}
            </p>
          </label>
        </div>
        <div className="d-flex align-items-center">
          <i
            className="fa fa-trash fa-2x trash-icon"
            aria-hidden="true"
            onClick={() => handleDelete(task.id)}
          ></i>
          <i
            className="fa fa-pencil-square fa-2x edit-icon "
            aria-hidden="true"
            onClick={() => handleEdit(task.id)}
          ></i>
        </div>
      </li>
    </>
  );
};

export default Task;
