import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Trains from './components/Trains'
import Settings from './components/Settings'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'


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

export default createAppContainer(tabNavigator)