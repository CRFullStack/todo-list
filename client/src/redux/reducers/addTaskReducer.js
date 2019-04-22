const initialState = {
  age: 21,
  complexion: "black",
  task: [],
  addTask: "",
  message: ""
};

// When the reducer receives an action from dispach,
const addTaskReducer = (state = initialState, action) => {
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
  if (action.type === "SUBMIT_TASK") {
    newState.addTask = "";
  }
  if (action.type === "TEST_ACTION") {
    newState.message = action.payload;
  }

  return newState;
};

export default addTaskReducer;
