// These actions are used to change the settings for the global redux state
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