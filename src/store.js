import { AsyncStorage } from 'react-native'
import { createStore } from 'redux'
import rootReducer from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
// The config for redux-persist which saves to local AsyncStorage
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
// This creates the global store for Redux which is passed as a param to the persistStore for Redux-Persist
export const store = createStore(persistedReducer)

export const persistor = persistStore(store)
