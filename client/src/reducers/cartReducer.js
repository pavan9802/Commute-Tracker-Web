import { CHANGE_TEXT, UPDATE_USER_INFO } from "../actionTypes/actionTypes";

const initialState = {
  text: "0",
  userInfo:{
    "userEmail":"",
    "uid": ""
  }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case UPDATE_USER_INFO:
      return{
        ...state,
        userInfo: action.payload
      }
    default:
      return state;
  }
};