import {  CHANGE_TEXT } from "../actionTypes/actionTypes";

const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    payload: text
  };
};


export { changeText }