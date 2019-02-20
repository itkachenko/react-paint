import { ADD_DOC, GET_DOC } from '../actions/index';

const INITIAL_STATE = { };

export const addApp = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_DOC:
      return { ...state, id: action.id};
    case GET_DOC:
      return { ...state, id: action.id};
    default:
      return state;
  }
};
