import React, { JSXElementConstructor, useEffect, useState } from "react";
import { PlantDisplay } from "./PlantDisplay";
import { ShelfStatus } from "./ShelfStatus";

export const Arboretum = (): JSX.Element => {
  const date = new Date();
  return (
    <div>
      <p className="Date">{date}</p>
      <p>Time Stamp</p>
      <PlantDisplay />
      <ShelfStatus />
    </div>
  );
};
