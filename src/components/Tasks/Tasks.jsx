import React from "react";
import styles from "./tasks.module.css";
import { Task } from "../Task";
import empty from "../../assets/empty.svg";

const Tasks = ({ tasks, handleUpdateTask, handleRemoveTask }) => {
  // NOTE: do not delete `data-testid` key value pair
  if (tasks.length > 0){
    return (
      <ul data-testid="tasks" className={styles.tasks}>
      {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleUpdateTask={handleUpdateTask}
            handleRemoveTask={handleRemoveTask}
          />
        ))}
      </ul>
    )
  }else{
    return ( 
      <div data-testid="tasks-empty" className={styles.empty}>
      {/* <img src={empty} alt="empty task list" id="logo"/> */}
      <p>
        <b>Empty list</b>
      </p>
      <p>Add a new task above</p>
      </div>
  );
  }
  
};

export default Tasks;
