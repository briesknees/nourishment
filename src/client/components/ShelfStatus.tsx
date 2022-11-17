import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { UpdateTasksAsync } from "../redux/tasksSlice";

export const ShelfStatus = (): JSX.Element => {
//   const tasks: Task[] = useAppSelector((state) => state.tasks);

//   useEffect(() => {
//     useAppDispatch(UpdateTasksAsync("/api/tasks"));
//   }, []);

// // need to write tests that augment these variables with redux
const shelfHealth = "null";
const shelfPoints = "null";




  return (
    <div>
      <h1>Arboretum Status</h1>
      <p className="shelfHealth">Health: {shelfHealth}</p>
      <p className="shelfpoints">Points: {shelfPoints}</p>
    </div>
  );
};
