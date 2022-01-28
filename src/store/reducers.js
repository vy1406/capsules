import {
  SET_IS_LOADING,
  SET_IS_ERROR,
  SET_IS_MODAL_OPEN,
  SET_MODAL_TYPE,
  SET_MODAL_DATA,
  SET_USER_DATA,
  SET_LOGGED_USER,
  SET_TEAMS,
  SET_USERS
} from "./types";

const initialState = {
  isError: false,
  isLoading: false,
  isModalOpen: false,
  modalData: null,
  modalType: "",
  loggedUser: null,
  users: [],
  teams: [],
  userData: {
    user: null,
    roasters: []
  }
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
    
    case SET_LOGGED_USER: {
      console.log('SETLOGGED_USER', action.payload)
      return {
        ...state,
        ...{ loggedUser: action.payload}
      }
    }
    
    case SET_USER_DATA: {
      console.log(action)
      return {
        ...state,
        ...{ userData: action.payload}
      }
    }
    
    case SET_USERS: {
      return {
        ...state,
        ...{ users: action.payload}
      }
    }
    

    case SET_TEAMS: {
      return {
        ...state,
        ...{ teams: action.payload}
      }
    }
    

    default:
      return state;
  }
};