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