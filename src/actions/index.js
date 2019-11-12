//Action creator
export const showName = (name) => {
    //return an action
    return{
        type: 'SHOW_NAME',
        payload: name
    }
}