import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Trains from './src/components/Trains'
import Settings from './src/components/Settings'
import AsyncStorage from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
// import { createStore } from 'redux';
import { store, persistor } from './src/store'
import { Provider, connect } from 'react-redux';

// import reducer from './src/reducers'
// import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'



const tabNavigator = createBottomTabNavigator(

  {
        Home:{
          screen: Trains,
          navigationOptions: {
            iconStyle:{
              paddingTop: 30
            },
            tabBarLabel:"Trains",
            tabBarIcon:(
              <Icon name="ios-train" size={30} color='white' containerStyle={{ marginTop: 6 }}/>
            )
          },
        },
        Settings:{
          screen: Settings,
          navigationOptions: {
            tabBarLabel:"Settings",
            tabBarIcon:(
              <Icon name="ios-settings" size={30} color='white'/>
            )
          },
        },
      },
      {
        tabBarOptions: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style:{
          backgroundColor: 'rgba(51, 51, 51, 0.9)',
          },
          labelStyle:{
          fontSize: 12,
          fontWeight: 'bold'
          }
        },
      }
)


const AppContainer = createAppContainer(tabNavigator)


export default class App extends React.Component{

  render () {
    return (
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={console.log('loading')}>
    <AppContainer/>
    </PersistGate>
    </Provider>
    )
  }}