import React, { JSXElementConstructor, useEffect, useState } from "react";
import { PlantDisplay } from "./PlantDisplay";
import { ShelfStatus } from "./ShelfStatus";

export const Arboretum = (): JSX.Element => {
  type plantData = Data[];
  type Data = {
    data: {
      taskID: number;
      taskName: string;
      plantName: string;
      statusName: string;
      frequency: string;
      plantModelName: string;
    };
  };
  const date = new Date();

  //UpdateTasksAsync ({endpoint: string, request: {}})

//   const [plantArray, setPlantArray] = useState([]);
//   const getPlants = () => {
//     const url = "/endpoint";
//     fetch(url, {
//       method: "GET",
//       headers: {
//         Accept: "application/json, text/plain",
//         "Content-Type": "application/json",
//         Authorization: "bear ",
//         "x-Trigger": "CORS",
//       },
//     })
//       .then((data) => data.json())
//       .then((data) => {
//         const plantArrayPrelim: string[] = [];
//         const plantArrayData = data;
//         for (let i = 0; i < plantArrayData.length; i++) {
//           plantArrayPrelim.push(plantArrayData[i]);
//         }
//         setPlantArray(plantArrayPrelim);
//       });
//   };

  return (
    <div>
      {/* <p className="Date">{date}</p> */}
      <p>Time Stamp</p>
      <PlantDisplay />
      <ShelfStatus />
    </div>
  );
};
