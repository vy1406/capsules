import { SET_IS_ERROR, SET_IS_LOADING } from "./types";

export const setIsError = (isError) => ({ 
    type: SET_IS_ERROR,
    payload: isError
  })
  
export const setIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: isLoading
})
  
  