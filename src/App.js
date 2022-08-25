import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";

function App() {

  const task1 = { title: "tache 1", completed: true };
  const task2 = { title: "tache 2", completed: false };
  const [tasksList, setTasksList] = useState([task1, task2]);
  const tasksListElement = tasksList.map(task => {
    return (<Task title={task.title} completed={task.completed} />);
  })

  return (
    <div className="App container">
      <div className="tasks-container">
        {tasksListElement}
      </div>
    </div>
  );
}

export default App;