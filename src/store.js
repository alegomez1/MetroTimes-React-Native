import { AsyncStorage } from 'react-native'
import { createStore } from 'redux'
import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

export const store = createStore(rootReducer)
