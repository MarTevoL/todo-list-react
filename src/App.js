import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Learn JS for fun", status: 0 },
    { id: "task-2", title: "Learn JS", status: 1 },
  ]);
  const [showIncomplete, setshowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleIncomplete = (e) => {
    setshowIncomplete(e.target.checked);
  };

  const setTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1 className="title">
        Todo Lis
        <span>Get one item done at a time.</span>
      </h1>
      <ul className="task-list">
        {tasks
          .filter((task) => (showIncomplete ? !task.status : true))
          .map((task) => (
            <li key={task.id} className={task.status ? "done" : ""}>
              <span className="label">{task.title}</span>
              <div className="action">
                <input
                  type="checkbox"
                  className="btn-action btn-action-done"
                  checked={Boolean(task.status)}
                  onChange={(e) => setTaskStatus(task.id, e.target.checked)}
                />
                <button
                  className="btn-action btn-action-delete"
                  onClick={() => removeTask(task.id)}
                >
                  ✖
                </button>
              </div>
            </li>
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
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="newitem">Add to the todo list</label>
        <input
          type="text"
          id="newitem"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add item</button>
      </form>
    </div>
  );
}

export default App;
