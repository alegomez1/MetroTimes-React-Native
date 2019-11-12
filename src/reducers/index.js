import {combineReducers} from 'redux'

const selectedName = (selectedName = 'NO NAME', action) => {
    if(action.type === 'SHOW_NAME'){
        return action.payload
    }
    return selectedName
}

export default combineReducers({
    selectedName
})
