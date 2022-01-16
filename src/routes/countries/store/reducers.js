import { SET_COUNTRIES, INIT_COUNTRIES } from "./types";

const initialState = {
  countries: [],
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        ...{ countries: action.payload }
      };
    
    case INIT_COUNTRIES: {
      return {
        ...initialState
      }
    }

    default:
      return state;
  }
};