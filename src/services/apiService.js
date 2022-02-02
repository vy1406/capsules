import { getLocalStorageItem } from "./localStorage";
import { apiUrl, METHODS, CRUD, ROUTES } from "../utils/constants";

const createRoute = (route, crud) => ROUTES.HOME + ROUTES[route] + '/' + CRUD[crud]

const getHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getLocalStorageItem('token')
})

const createOptions = (method, body) => {
    if ( method === METHODS.GET ) {
        return {
            method,
            headers: getHeaders(),
        }
    } else { 
        return {
            method,
            headers: getHeaders(),
            body: JSON.stringify( body )
        }
    }
}

export function postLogin(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( user )
    };
    return fetch(apiUrl + 'login', requestOptions)
        .then(res => res.json())
        .catch((error) => {throw error})
}

export function getUserData() {
    const requestOptions = createOptions(METHODS.GET)

    return fetch(apiUrl + 'userdata', requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}

export function getTeamRoasters() {
    const url = createRoute('ROASTER', 'TEAM')
    const requestOptions = createOptions(METHODS.GET)
    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}

export function getUserRoasters() {
    const url = createRoute('ROASTER', 'READ')
    const requestOptions = createOptions(METHODS.GET)
    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}

export function getUsers() {
    const url = createRoute('USER', 'READ')
    const requestOptions = createOptions(METHODS.GET)
    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}

export function getTeams() {
    const url = createRoute('TEAM', 'READ')
    const requestOptions = createOptions(METHODS.GET)
    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}
export function updateDBUser(updatedUser) {
    const url = createRoute('USER', 'UPDATE')
    const requestOptions = createOptions(METHODS.POST, updatedUser)
    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}

export function postUser(user) {
    const url = createRoute('USER', 'CREATE')
    const requestOptions = createOptions(METHODS.POST, user)
    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}


export function postTeam(team) {
    const url = createRoute('TEAM', 'CREATE')
    const requestOptions = createOptions(METHODS.POST, team)

    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}

export function postRoasters(dates) {
    const url = createRoute('ROASTER', 'UPDATE_OR_REMOVE')
    const requestOptions = createOptions(METHODS.POST, dates)
    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}

export function getUserTeammates() {
    const url = createRoute('USER', 'TEAMMATES')
    const requestOptions = createOptions(METHODS.POST)
    return fetch(url, requestOptions)
        .then(res => res.json())
        .catch((error) => { throw error })
}


