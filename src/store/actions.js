import {
  SET_IS_ERROR,
  SET_IS_LOADING,
  SET_IS_MODAL_OPEN,
  SET_MODAL_DATA,
  SET_MODAL_TYPE,
  SET_USER_DATA,
  GET_USER_DATA,
  GET_TEAMS,
  GET_USERS,
  SET_TEAMS,
  SET_USERS,
  SET_LOGGED_USER,
  ADD_NEW_USER,
  ADD_NEW_TEAM,
  GET_USER_ROASTERS,
  AUTHENTICATE,
  SET_USER_ROASTERS,
  ADD_DATES
} from "./types";

export const setLoggedUser = (user) => ({
  type: SET_LOGGED_USER,
  payload: user
})

export const login = (user) => ({
    type: AUTHENTICATE,
    payload: user
})

export const setIsError = (isError) => ({ 
    type: SET_IS_ERROR,
    payload: isError
  })
  
export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: isLoading
})
  
export const addNewUser = (userToAdd) => ({
  type: ADD_NEW_USER,
  payload: userToAdd
})

export const addNewTeam = (teamToAdd) => ({
  type: ADD_NEW_TEAM,
  payload: teamToAdd
})

export const toggleModal = (isModalOpen) => ({
  type: SET_IS_MODAL_OPEN,
  payload: isModalOpen
})

export const setModalType = (modalType) => ({
  type: SET_MODAL_TYPE,
  payload: modalType
})

export const setModalData = (modalData) => ({
  type: SET_MODAL_DATA,
  payload: modalData
})

export const setUserRoasters = (roasters) => ({
  type: SET_USER_ROASTERS,
  payload: roasters
})

// todo: no need
export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData
})

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users
})

export const setTeams = (teams) => ({
  type: SET_TEAMS,
  payload: teams
})

export const addDates = (dates) => ({
  type: ADD_DATES,
  payload: dates
})



export const getTeams = () => ({ type: GET_TEAMS })

export const getUserData = () => ({type: GET_USER_DATA})

export const getUsers = () => ({type: GET_USERS})

