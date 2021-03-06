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

  return newState;
};

export default listReducer;
