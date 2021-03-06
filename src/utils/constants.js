import { getRandomColor, addDaysToDate, clientToServeDate } from "./utils";

export const WEEK_NAMES = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי']
export const WEEK = [0,1,2,3,4];
export const EMPTY_ROASTER = { date: clientToServeDate(new Date()), users: []}

// for dev:

export const DUMMY_USERS = [
    { id: 11,
        username: 'vova',
        teamId: 1,
        color: getRandomColor(),
        isTeamLeader: false,
        teamName: 'Dairy Stars'},
    {  id: 22,
        username: 'udi',
        teamId: 1,
        color: getRandomColor(),
        isTeamLeader: false,
        teamName: 'Dairy Stars'},
    {  id: 33,
        username: 'saar',
        teamId: 1,
        color: getRandomColor(),
        isTeamLeader: false,
        teamName: 'Dairy Stars'},
    {  id: 44,
        username: 'stav',
        teamId: 1,
        color: getRandomColor(),
        isTeamLeader: false,
        teamName: 'Dairy Stars'},
    {  id: 55,
        username: 'noa',
        teamId: 1,
        color: getRandomColor(),
        isTeamLeader: false,
        teamName: 'Dairy Stars'},
    {  id: 66,
        username: 'moshe',
        teamId: 1,
        color: getRandomColor(),
        isTeamLeader: false,
        teamName: 'Dairy Stars'}
]


const now = new Date("01-15-2022")
export const ROASTERS = [
    {date: addDaysToDate(now, 1), users: [DUMMY_USERS[0]]},
    {date: addDaysToDate(now, 2), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 3), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 4), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 5), users: [DUMMY_USERS[0]]},
    {date: addDaysToDate(now, 6), users: [DUMMY_USERS[0]]},
    {date: addDaysToDate(now, 7), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 8), users: [DUMMY_USERS[1], DUMMY_USERS[2]]},
    {date: addDaysToDate(now, 9), users: [DUMMY_USERS[0], DUMMY_USERS[1], DUMMY_USERS[2], DUMMY_USERS[3], DUMMY_USERS[4], DUMMY_USERS[5]]},
    {date: addDaysToDate(now, 10), users: [DUMMY_USERS[1], DUMMY_USERS[2]]}
]

export const TEAM_USERS = DUMMY_USERS

export const DUMMY_USER_DATA = {
    user: DUMMY_USERS[0],
    roasters: ROASTERS,
    teamUsers: TEAM_USERS
}

export const RADIO_BUTTONS = {
    EDIT_USER: "EDIT_USER",
    NEW_USER: "NEW_USER",
    NEW_TEAM: "NEW_TEAM",
}
export const ADMIN_RADIO_BUTTONS = [
    {value: RADIO_BUTTONS.EDIT_USER, label: "Edit User"},
    {value: RADIO_BUTTONS.NEW_USER, label: "New User"},
    {value: RADIO_BUTTONS.NEW_TEAM, label: "New Team"}
]

export const apiUrl =  'http://localhost:3000/';

export const CRUD = {
    ALL: 'all',
    READ: 'read',
    USER: 'user',
    TEAM: 'team',
    CREATE: 'create',
    DELETE: 'delete',
    UPDATE: 'update',
    TEAMMATES: 'teammates',
    UPDATE_OR_REMOVE: 'updateOrRemove',
}

export const ROUTES = {
    HOME: apiUrl,
    TEAM: 'team',
    USER: 'user',
    ROASTER: 'roaster',
}

export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT'
}
