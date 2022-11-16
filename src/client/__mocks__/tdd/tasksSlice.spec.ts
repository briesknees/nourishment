import { userData, Task, Status, PlantModel, Frequency, asyncStatus } from '../../../types/api'

import tasksReducer, {
    initialState,
    increment,
    decrement,
    addNewTask,
    deleteTask,
    updateTask,
    editFrequency
  } from './tasksSlice';

  describe('tasks reducer', () => {
    //this example tast is used in several tests
    const newTask: Task = {
      id: 'demo task 2',
      taskName: 'Go for a walk',
      plantName: 'Jenna',
      model: PlantModel.Cactus,
      status: Status.Great,
      Frequency: Frequency.Daily,
      actionCount: 1,
    };
    //this updated example task is used in several tests
    const updatedTask: Task = {
      id: 'demo task 2',
      taskName: 'Go for a walk',
      plantName: 'Jenna',
      model: PlantModel.Cactus,
      status: Status.Great,
      Frequency: Frequency.Weekly, //updated frequency
      actionCount: 1,
    };


    it('should handle initial state', () => {
      expect(tasksReducer(undefined, { type: 'unknown' })).toEqual({
        id: 'demo user',
        tasks: [{
          id: 'demo task',
          taskName: 'Drink water',
          plantName: 'Henry',
          model: PlantModel.Flower,
          status: Status.Great,
          Frequency: Frequency.Hours12,
          actionCount: 0,
        }],
        points: 0,
        currentStreak: 0,
        longestStreak: 0,
        asyncStatus: asyncStatus.idle,
      });
    });

  
    it('should handle points increment', () => {
      const actual = tasksReducer(initialState, increment());
      expect(actual.points).toEqual(1);
    });


    it('should handle points decrement', () => {
      const actual = tasksReducer(initialState, decrement());
      expect(actual.points).toEqual(0);
    });
  
    it('should handle adding a newTask to the tasks array', () => {
      // create model of the new state after change
      const largerTaskList = [{
        ...initialState, newTask
      }];
      const actual = tasksReducer(initialState, addNewTask(newTask));
      expect(actual.tasks).toEqual(largerTaskList);
    });


    it('should handle updating the frequency of a specfic task', () => {
      // create model of the new state after change
      const largerTaskListEdited = [{
        ...initialState, updatedTask
      }];
      const actual = tasksReducer(initialState, editFrequency(updatedTask));
      expect(actual.tasks).toEqual(largerTaskListEdited);
    });


    it('should handle updates from completing a task', () => {
      // induce mock action 
      const actionCountUp = 2
      // update task with action
      const taskCompleted = {
        ... updatedTask, actionCountUp, //updated the action count from initial 1 to 2
      };
      // update status for mock
      const status = Status.Excess;
      // create model of the new state after change
      const smallerTaskListEdited = [{
        ...initialState, taskCompleted, status, //updated action count and increased status
      }];
      const actual = tasksReducer(initialState, updateTask(taskCompleted));
      expect(actual.tasks).toEqual(smallerTaskListEdited);
    });


    it('should handle updates from NOT completing a task', () => {
      // induce mock action 
      const actionCountDown = -1 //updated the action count from initial 1 to -1
      // update task with action
      const taskNotCompleted = {
        ... updatedTask, actionCountDown, //updated the action count
      };
      // update status for mock
      const status = Status.Good;
      // create model of the new state after change
      const smallerTaskListEdited = [{
        ...initialState, taskNotCompleted, status, //updated action count and decreased status
      }];
      const actual = tasksReducer(initialState, updateTask(taskNotCompleted));
      expect(actual.tasks).toEqual(smallerTaskListEdited);
    });


    it('should handle deleting a specfic task', () => {
      const actual = tasksReducer(initialState, deleteTask(updatedTask));
      expect(actual.tasks).toEqual(initialState);
    });
  });