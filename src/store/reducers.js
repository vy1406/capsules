import {
  SET_IS_LOADING,
  SET_IS_ERROR,
  SET_IS_MODAL_OPEN,
  SET_MODAL_TYPE,
  SET_MODAL_DATA
} from "./types";

const initialState = {
  isError: false,
  isLoading: false,
  isModalOpen: false,
  modalData: null,
  modalType: ""
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
    
    case SET_IS_MODAL_OPEN:
      return {
        ...state,
        ...{ isModalOpen: action.payload }
      };

    case SET_MODAL_TYPE:
      return {
        ...state,
        ...{ modalType: action.payload }
      };

    case SET_MODAL_DATA: {
      return {
        ...state,
        ...{ modalData: action.payload }
      };
    }
    
    default:
      return state;
  }
};