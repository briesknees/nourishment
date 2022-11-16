import React, {useEffect, useState } from 'react';
import tasksSlice from '../redux/tasksSlice';

// need to write tests that augment these variables with redux
const shelfHealth = "null";
const shelfPoints = "null";

export const ShelfStatus = (): JSX.Element => {
  return (
    <div>
      <h1>Arboretum Status</h1>
      <p className="shelfHealth">Health: {shelfHealth}</p>
      <p className="shelfpoints">Points: {shelfPoints}</p>
    </div>
  );
};

