import React, { useState } from "react";
import tasksSlice from "../redux/tasksSlice";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export const PlantDisplay = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <div>
    <Button></Button>
  <div>Plant Display Div!</div>;
    </div>
  )
};
