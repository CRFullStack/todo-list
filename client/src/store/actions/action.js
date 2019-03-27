// this is for Thunk

// this redux call runs after async command is finished.
export const ageUpAsnc = val => {
  return { type: "AGE_UP", value: val };
};

export const ageUp = val => {
  return dispach => {
    // Run async command here to the server then dispach the action to redux
    // after async call is successful run
    dispach(ageUpAsnc(val));
  };
};

export const ageDown = val => {
  return { type: "AGE_Down", value: val };
};
