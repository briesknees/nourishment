// A mock function to mimic making an async request for data
export function fetchTasks(tasks = []) {
  return new Promise<{ data: (string | number)[] }>((resolve) =>
    setTimeout(() => resolve({ data: tasks }), 500)
  );
}
