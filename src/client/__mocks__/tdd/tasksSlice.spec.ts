import counterReducer, {
    TaskState,
    increment,
    decrement,
    addNewTask,
    editCurrentTask
  } from './tasksSlice';
  
  describe('tasks reducer', () => {
    const initialState: TaskState = {
      totalTasks: 1,
      taskList: [{ 
        taskName: 'Drink water', 
        plantName: 'Henry', 
        taskDuration: 'Twice per day', 
        plantType: 'cactus'}],
      optionsList: [],
      status: 'idle'
    };

    it('should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
        value: 0,
        status: 'idle',
      });
    });
  
    it('should handle increment', () => {
      const actual = counterReducer(initialState, increment());
      expect(actual.value).toEqual(4);
    });
  
    it('should handle decrement', () => {
      const actual = counterReducer(initialState, decrement());
      expect(actual.value).toEqual(2);
    });
  
    it('should handle incrementByAmount', () => {
      const actual = counterReducer(initialState, addNewTask(2));
      expect(actual.value).toEqual(5);
    });

    it('should handle incrementByAmount', () => {
      const actual = counterReducer(initialState, editCurrentTask(2));
      expect(actual.value).toEqual(5);
    });
  });