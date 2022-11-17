/* This test file tests the reducer functions for tasks. It confirms increases
and deacreased to user points as well as the ability to add, update, and delete tasks. 
There are a variety of updates tested including updates to a task's frequency,
action count, and status. */

import {
  Task,
  Status,
  PlantModel,
  Frequency,
  asyncStatus,
  Method,
} from "../../types/api";

import tasksReducer, {
  initialState,
  increment,
  decrement,
  extraReducers,
} from "./tasksSlice";

describe("tasks reducer", () => {
  //this example tast is used in several tests
  const newTask: Task = {
    id: "demo task 2",
    taskName: "Go for a walk",
    plantName: "Jenna",
    model: PlantModel.Cactus,
    status: Status.Great,
    Frequency: Frequency.Daily,
    actionCount: 1,
  };

  // create model of the new state after change
  const updatedState = [
    {
      ...initialState,
      newTask,
    },
  ];

  it("should handle initial state", () => {
    expect(tasksReducer(undefined, { type: "unknown" })).toEqual({
      id: "demo user",
      tasks: [
        {
          id: "demo task",
          taskName: "Drink water",
          plantName: "Henry",
          model: PlantModel.Flower,
          status: Status.Great,
          Frequency: Frequency.Hours12,
          actionCount: 0,
        },
      ],
      points: 0,
      currentStreak: 0,
      longestStreak: 0,
      asyncStatus: asyncStatus.idle,
    });
  });

  it("should handle points increment", () => {
    const actual = tasksReducer(initialState, increment());
    expect(actual.points).toEqual(1);
  });

  it("should handle points decrement", () => {
    const actual = tasksReducer(initialState, decrement());
    expect(actual.points).toEqual(-1);
  });

  it("should handle adding a newTask to the tasks array", () => {
    //format argument for async func
    // @param arg { endpoint: endpoint, request: {} }
    const ResNewTask = {
      endpoint: "/api/tasks",
      response: {
        method: Method.POST,
        headers: { "Content-Type": "application/json" },
        body: newTask,
      },
    };
    const actual = tasksReducer(initialState, extraReducers(ResNewTask));
    expect(actual.tasks).toEqual(updatedState);
  });

  it("should handle updating the frequency of a specfic task", () => {
    //this updated example task is used in several tests
    const updatedTask: Task = {
      id: "demo task 2",
      taskName: "Go for a walk",
      plantName: "Jenna",
      model: PlantModel.Cactus,
      status: Status.Great,
      Frequency: Frequency.Weekly, //updated frequency
      actionCount: 1,
    };
    // create model of the new state after change
    const updatedState2 = [
      {
        ...initialState,
        updatedTask,
      },
    ];
    //format argument for async func
    // @param arg { endpoint: endpoint, request: {} }
    const ResUpdatedTask = {
      endpoint: "/api/tasks",
      response: {
        method: Method.PUT,
        headers: { "Content-Type": "application/json" },
        body: updatedTask,
      },
    };
    const actual = tasksReducer(updatedState, extraReducers(ResUpdatedTask));
    expect(actual.tasks).toEqual(updatedState2);
  });

  it("should handle updates from completing a task", () => {
    // induce mock action
    const actionCountUp = 2;
    // update task with action
    const taskCompleted = {
      ...newTask,
      actionCountUp, //updated the action count from initial 1 to 2
    };
    // update status for mock
    const status = Status.Excess;
    // create model of the new state after change
    const taskCompletedState = [
      {
        ...initialState,
        taskCompleted,
        status, //updated action count and increased status
      },
    ];
    //format argument for async func
    // @param arg { endpoint: endpoint, request: {} }
    const ResTaskCompleted = {
      endpoint: "/api/tasks",
      response: {
        method: Method.PUT,
        headers: { "Content-Type": "application/json" },
        body: taskCompleted,
      },
    };
    const actual = tasksReducer(updatedState, extraReducers(ResTaskCompleted));
    expect(actual.tasks).toEqual(taskCompletedState);
  });

  it("should handle updates from NOT completing a task", () => {
    // induce mock action
    const actionCountDown = -1; //updated the action count from initial 1 to -1
    // update task with action
    const taskNotCompleted = {
      ...newTask,
      actionCountDown, //updated the action count
    };
    // update status for mock
    const status = Status.Good;
    // create model of the new state after change
    const taskNotCompletedState = [
      {
        ...initialState,
        taskNotCompleted,
        status, //updated action count and decreased status
      },
    ];
    //format argument for async func
    // @param arg { endpoint: endpoint, request: {} }
    const TaskNotCompleted = {
      endpoint: "/api/tasks",
      response: {
        method: Method.PUT,
        headers: { "Content-Type": "application/json" },
        body: taskNotCompleted,
      },
    };
    const actual = tasksReducer(updatedState, extraReducers(TaskNotCompleted));
    expect(actual.tasks).toEqual(taskNotCompletedState);
  });

  it("should handle deleting a specfic task", () => {
    //format argument for async func
    // @param arg { endpoint: endpoint, request: {} }
    const requestDelete = {
      endpoint: "/api/tasks",
      response: {
        method: Method.DELETE,
        headers: { "Content-Type": "application/json" },
        body: newTask,
      },
    };
    const actual = tasksReducer(updatedState, extraReducers(requestDelete));
    expect(actual.tasks).toEqual(initialState);
  });
});
