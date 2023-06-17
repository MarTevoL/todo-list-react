import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showIncomplete,
  setTaskStatus,
  removeTask,
  handleIncomplete,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? !task.status : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              setTaskStatus={setTaskStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>

      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          Show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showIncomplete}
          onChange={handleIncomplete}
        />
      </div>
    </>
  );
}

export default TaskList;
