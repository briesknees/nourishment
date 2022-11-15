
// Example 'nextReset' value: 1668542399000; This value will be acquired from DB

/**
 * Set on server during 'Update' event.
 */
export enum Status { 
  Excess, // Did extra in a day
  Great, // 
  Good, // 
  Poor, // 
  Bad // Neglected
}

export enum PlantModel { Flower = 'flower', Cactus = 'cactus' }
export enum Frequency { 
  Weekly = 604800000, 
  Daily = 86400000, 
  Hours12 = 43200000  
}

export type userData = {
  tasks: Task[],
}

export type Task = {
  id: string,
  name: string,
  model: PlantModel,
  status: Status,
  frequency: Frequency,
  actionCount: number,
}


