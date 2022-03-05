import React from "react";

const AddTask = ({ enteredTask, setEnteredTask, handleSubmit, mode }) => {
  return (
    <form>
      <div className="input-group mt-4 mb-3 w-75 ">
        <input
          type="text"
          className="form-control"
          placeholder="Add Task"
          aria-label="Add Task"
          aria-describedby="basic-addon2"
          value={enteredTask}
          onChange={(e) => setEnteredTask(e.target.value)}
        />
        <button
          className="btn btn-primary"
          id="basic-addon2"
          type="submit"
          onClick={handleSubmit}
        >
          {mode === "edit" ? "Save" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddTask;
