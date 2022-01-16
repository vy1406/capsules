import { SET_IS_LOADING, SET_IS_ERROR } from "./types";

const initialState = {
  isError: false,
  isLoading: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_IS_LOADING:
      return {
        ...state,
        ...{ isLoading: action.payload }
      };

    case SET_IS_ERROR:
      return {
        ...state,
        ...{ isError: action.payload }
      };
      
    default:
      return state;
  }
};