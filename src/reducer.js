import { UPDATE_TITLE } from "./actions";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, appTitle: action.payload };
    default:
      return state;
  }
};

export default appReducer;
