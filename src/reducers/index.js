import {combineReducers} from 'redux'

const initialState = () =>{
return(
    {name: 'NO NAME LADY'}
)
}

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

export default combineReducers({
    initialState,
    changeName,
    morningStation,
    eveningStation,
    darkMode
})
