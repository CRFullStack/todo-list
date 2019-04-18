const initialState = {
  age: 21,
  complexion: "black",
  task: ["wash car", "clean room", "feed cat"],
  addTask: "Testing123"
};

// When the reducer receives an action from dispach,
const reducer = (state = initialState, action) => {
  const newState = { ...state };

  // Our dispach actions go here
  if (action.type === "AGE_UP") {
    newState.age++;
  }
  if (action.type === "AGE_DOWN") {
    newState.age--;
  }
  if (action.type === "ADD_TASK") {
    newState.addTask = action.payload;
  }

  return newState;
};

export default reducer;
