const initialState = {
  task: [
    {
      id: 1,
      task: "wash car",
      completed: false
    },
    {
      id: 2,
      task: "clean room",
      completed: false
    },
    {
      id: 3,
      task: "feed cat",
      completed: true
    }
  ]
};

// When the reducer receives an action from dispach,
const listReducer = (state = initialState, action) => {
  const newState = { ...state };

  // Our dispach actions go here
  if (action.type === "AGE_UP") {
    newState.age++;
  }
  if (action.type === "AGE_DOWN") {
    newState.age--;
  }
  if (action.type === "ADD_TASK") {
    newState.addTask = action.payload.target.value;
    console.log(newState.addTask);
  }

  return newState;
};

export default listReducer;
