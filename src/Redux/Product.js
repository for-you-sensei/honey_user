export const reRelodeProduct = (state = false, action) => {
  switch (action.type) {
    case "RELODEPRODUCT":
      return !state;
    default:
      return state;
  }
};

export const acRelodeProduct = () => {
  return {
    type: "RELODEPRODUCT",
  };
};
