import {  CHANGE_TEXT, UPDATE_USER_INFO } from "../actionTypes/actionTypes";

const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    payload: text
  };
};

const updateUserInfo = (user) =>{
  return {
    type: UPDATE_USER_INFO,
    payload: user
  }
}


export { changeText, updateUserInfo }