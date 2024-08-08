import React from "react";
import Task from "./Task";
import { useState } from "react";
function TaskList({ tasks, onHandleDelete }) {
  const tasksEl = tasks.map((task) => (
    <Task
      onHandleDelete={onHandleDelete}
      key={task.text}
      category={task.category}
      text={task.text}
    />
  ));
  return <div className="tasks"> {tasksEl} </div>;
}

export default TaskList;
