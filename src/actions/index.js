//Action creator
export const changeName = (name) => {
    //return an action
    return{
        type: 'CHANGE_NAME',
        payload: name
    }
}

export const changeMorningStation = (station) => {
    return{
        type: "CHANGE_MORNING",
        payload: station
    }
}

export const changeEveningStation = (station) => {
    return{
        type: "CHANGE_EVENING",
        payload: station
    }
}

export const toggleDarkMode = (toggle) => {
    return{
        type: "TOGGLE_DARK_MODE",
        payload: toggle
    }
}