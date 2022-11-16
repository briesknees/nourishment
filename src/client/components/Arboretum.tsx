import React, { JSXElementConstructor, useEffect }  from 'react'
import { PlantDisplay } from './PlantDisplay'
import { ShelfStatus } from './ShelfStatus'

export const Arboretum = (): JSX.Element => {
	const date = new Date();
    console.log(typeof date);
    console.log(date);
    return (
        <div>
        <p>Time Stamp</p>
        <PlantDisplay></PlantDisplay>
        <ShelfStatus></ShelfStatus>
        </div>
    )
};

