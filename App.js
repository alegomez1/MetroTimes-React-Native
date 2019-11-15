import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import Trains from './src/components/Trains'
import Settings from './src/components/Settings'

import Icon from 'react-native-vector-icons/Ionicons'

import { store, persistor } from './src/store'
import { Provider, connect } from 'react-redux';
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
              <Icon name="ios-train" size={24} color='white' containerStyle={{ marginTop: 6 }}/>
            )
          },
        },
        Settings:{
          screen: Settings,
          navigationOptions: {
            tabBarLabel:"Settings",
            tabBarIcon:(
              <Icon marginTop={20} name="ios-settings" size={24} color='white'/>
            )
          },
        },
      },
      {
        tabBarOptions: {
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginTop: 30,
          paddingTop: 20,
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style:{
          backgroundColor: 'rgba(51, 51, 51, 0.9)',
          paddingTop: 10,
          paddingBottom: 30
          },
          labelStyle:{
            // paddingTop:10,
          fontSize: 10,
          fontWeight: 'bold',
          }
        },
      }
)

const AppContainer = createAppContainer(tabNavigator)

export default class App extends React.Component{

  render () {
    return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <AppContainer/>
    </PersistGate>
    </Provider>
    )
  }}