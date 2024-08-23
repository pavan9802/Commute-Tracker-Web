import { CHANGE_TEXT } from "../actionTypes/actionTypes";

const initialState = {
  text: "0",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};