import {
  SET_IS_ERROR,
  SET_IS_LOADING,
  SET_IS_MODAL_OPEN,
  SET_MODAL_DATA,
  SET_MODAL_TYPE
} from "./types";

export const setIsError = (isError) => ({ 
    type: SET_IS_ERROR,
    payload: isError
  })
  
export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: isLoading
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