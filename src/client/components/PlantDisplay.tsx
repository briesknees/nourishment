import React, { useState, useEffect } from "react";
import tasksSlice from "../redux/tasksSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { UpdateTasksAsync } from "../redux/tasksSlice";

export const PlantDisplay = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('hi');
    dispatch(
      UpdateTasksAsync({ endpoint: "/api/tasks", request: { method: "GET" } })
    );
  }, []);

  return (
    <div>
      {/* <Button variant="primary"> onClick = {handleShow} </Button> */}
      <h1>Arboretum</h1>
      <div>Plant Display Div!</div>
    </div>
  );
};
