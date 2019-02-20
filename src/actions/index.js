import { v4 } from 'uuid';

export const ADD_DOC = 'ADD_DOC';
export const GET_DOC = 'GET_DOC';

export const addDoc = () => ({
  type: ADD_DOC,
  id: v4()
});

export const getDoc = () => ({
  type: GET_DOC,
  payload: v4()
});
