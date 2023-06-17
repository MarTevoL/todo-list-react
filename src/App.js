import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

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
      <Header title="Todo List" subTitle="Get things done" />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        handleIncomplete={handleIncomplete}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
