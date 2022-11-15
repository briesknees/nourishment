/**
 * Updated on each each Task whenever a "Cycle" ends.
 * @remarks Generally, a cycle's end triggers all tasks to degrade one status. 
 * Watering can reverse this
 * @privateRemarks Cycles will be hard-coded to once per day at 11:59pm for the time being.
 */
export enum Status { 
  Excess = 'Excess', // Did extra in a Cycle
  Great = 'Great', // Did the expected number of times this cycle
  Good = 'Good', // Ended 'Great' last cycle
  Poor = 'Poor', // Ended 'Good' last cycle
  Bad = 'Bad' // Ended 'Poor' last cycle
}

/**
 * Visual Models for plants
 * @values Flower or Cactus
 */
export enum PlantModel { Flower = 'Flower', Cactus = 'Cactus' }

/**
 * Acceptable frequencies for tasks to be completed.
 * @values Weekly, Daily, or Hours12
 */
export enum Frequency { Weekly = 'Weekly', Daily ='Daily', Hours12 ='2x Daily'}

/**
 * Data related to the user which should be retrieved by the front-end upon app initialization.
 */
export type userData = {
  id: string,
  tasks: Task[],
  points: number,
  currentStreak: number,
  longestStreak: number,
}

/**
 * Holds the core information related to user Tasks.
 */
export type Task = {
  id: string,
  name: string,
  model: PlantModel,
  status: Status,
  Frequency: Frequency,
  actionCount: number,
}


