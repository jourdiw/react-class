import { UPDATE_TITLE, DISPLAY_CLOCK } from "./actions";
import showsReducer from './modules/shows/reducer'
import { combineReducers } from 'redux'

const configReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, appTitle: action.payload };
    case DISPLAY_CLOCK:
      return {...state, displayClock: action.payload };
    default:
      return state;
  }
};

const appReducer = combineReducers({
  shows: showsReducer,
  config: configReducer
})

export default appReducer;
