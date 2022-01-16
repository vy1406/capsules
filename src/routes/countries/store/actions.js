import { GET_COUNTRIES, SET_COUNTRIES, INIT_COUNTRIES } from "./types";

export const getCountries = () => ({ type: GET_COUNTRIES });
export const initCountries = () => ({ type: INIT_COUNTRIES })
export const setCountries = countries => ({
  type: SET_COUNTRIES,
  payload: countries
});

