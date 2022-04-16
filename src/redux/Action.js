import { ADD, COMPLETE, Complete, DELETE, EDIT, FILTER } from "./ActionType";

export const Add = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};

export const del = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const COMP = (id) => {
  return {
    type: COMPLETE,
    payload: id,
  };
};
export const filt = () => {
  return {
    type: FILTER,
  };
};

export const Edit = (editedTask) => {
  return {
    type: EDIT,
    payload: editedTask,
  };
};
