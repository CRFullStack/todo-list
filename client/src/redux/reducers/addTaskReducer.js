const initialState = {
  age: 21,
  complexion: "black",
  task: [],
  taskInput: "",
  message: ""
};

// When the reducer receives an action from dispach,
const addTaskReducer = (state = initialState, action) => {
  const newState = { ...state };

  // Our dispach actions go here

  if (action.type === "SUBMIT_TASK") {
    newState.taskInput = "";
  }
  if (action.type === "TEST_ACTION") {
    newState.message = action.payload;
  }
  if (action.type === "REST_ACTION") {
    newState.taskInput = action.payload;
  }
  if (action.type === "ADD_TASK") {
    newState.addTask = action.payload.target.value;
  }
  if (action.type === "GET_TASK_ACTION") {
    newState.task = action.payload;
  }
  if (action.type === "MARKTASKCOMPLETED_ACTION") {
    newState.task = action.payload;
  }
  if (action.type === "DELETE_ACTION") {
    newState.task = action.payload;
  }

  return newState;
};

export default addTaskReducer;
