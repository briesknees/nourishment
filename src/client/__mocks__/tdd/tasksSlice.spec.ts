import tasksReducer, {
    TaskState,
    increment,
    addNewTask,
    deleteTask,
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

    const newTask = { 
      taskName: 'Take a walk', 
      plantName: 'Jenna', 
      taskDuration: 'Once per day', 
      plantType: 'snake'
    };

    it('should handle initial state', () => {
      expect(tasksReducer(undefined, { type: 'unknown' })).toEqual({
        totalTasks: 1,
        taskList: [{ 
          taskName: 'Drink water', 
          plantName: 'Henry', 
          taskDuration: 'Twice per day', 
          plantType: 'cactus'
        }],
      optionsList: [],
      status: 'idle'
      });
    });
  
    it('should handle increment', () => {
      const actual = tasksReducer(initialState, increment());
      expect(actual.totalTasks).toEqual(2);
    });
  
    it('should handle adding a newTask', () => {

      const largerTaskList = [{ 
        taskName: 'Drink water', 
        plantName: 'Henry', 
        taskDuration: 'Twice per day', 
        plantType: 'cactus'
      }, newTask
    ];

      const actual = tasksReducer(initialState, addNewTask(newTask));
      expect(actual.taskList).toEqual(largerTaskList);
    });

    it('should handle updating a task', () => {

      const updatedTask = { 
        taskName: 'Take a walk', 
        plantName: 'Jenna', 
        taskDuration: 'Once per week', // changed the duration
        plantType: 'snake'
      };

      const largerTaskListEdited = [{ 
        taskName: 'Drink water', 
        plantName: 'Henry', 
        taskDuration: 'Twice per day', 
        plantType: 'cactus'
      }, updatedTask
    ];

      const actual = tasksReducer(initialState, editCurrentTask(updatedTask));
      expect(actual.taskList).toEqual(largerTaskListEdited);
    });

    it('should handle deleting a task', () => {

      const smallerTaskList = [{ 
        taskName: 'Drink water', 
        plantName: 'Henry', 
        taskDuration: 'Twice per day', 
        plantType: 'cactus'
    }];

      const actual = tasksReducer(initialState, deleteTask(newTask));
      expect(actual.taskList).toEqual(smallerTaskList);
    });
  });