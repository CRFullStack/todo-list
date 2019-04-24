const initialState = {
  task: []
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
  if (action.type === "GET_TASK_ACTION") {
    newState.task = action.payload;
  }
  if (action.type === "MARKTASKCOMPLETED_ACTION") {
    console.log(`Made it to the reducer: ${action.payload}`);
    newState.task = action.payload;
  }
  if (action.type === "DELETE_ACTION") {
    newState.task = action.payload;
  }

  return newState;
};

export default listReducer;
