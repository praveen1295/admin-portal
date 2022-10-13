const INITIAL_STATE = {
  userName: "s",
  firstName: "s",
  lastName: "h",
  gender: "m",
  status: true,
  address: "",
  email: "",
  password: "",
};

const createNewUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default createNewUser;
