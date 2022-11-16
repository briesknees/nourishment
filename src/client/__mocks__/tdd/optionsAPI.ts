// A mock function to mimic making an async request for data
export function fetchOptions(options = []) {
    return new Promise<{ data: (string | number)[] }>((resolve) =>
      setTimeout(() => resolve({ data: options }), 500)
    );
  }