import {combineReducers} from 'redux'

// These reducers check to see what action types is passed and return their respective payload
const changeName = (name='no name', action) => {
    if(action.type === 'CHANGE_NAME'){
        return action.payload
    }
    return name
}

const morningStation = (station='DLN', action) => {
    if(action.type === 'CHANGE_MORNING'){
        return action.payload
    }
    return station
}

const eveningStation = (station='BLK', action) => {
    if(action.type === 'CHANGE_EVENING'){
        return action.payload
    }
    return station
}

const darkMode = (darkMode=true, action) => {
    if(action.type === 'TOGGLE_DARK_MODE'){
        return action.payload
    }
    return darkMode
}
// The reducers are all combined and exported in combineReducers
export default combineReducers({
    changeName,
    morningStation,
    eveningStation,
    darkMode
})
