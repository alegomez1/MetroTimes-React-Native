import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import axios from 'axios';
import train from "./assets/metroPNG.png"
import convert from 'xml-js'

import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

import SettingsScreen from './components/Settings'


class HomeScreen extends React.Component {

  state = {
    stationName: '',

    firstNorthTrain: '---',
    firstNorthTrainArrival: '----------',

    secondNorthTrain: '---',
    secondNorthTrainArrival: '----------',

    firstSouthTrain: '',
    firstSouthTrainArrival: '----------',

    secondSouthTrain: '',
    secondSouthTrainArrival: '----------',

  };
  update = async value => {
    // Vibration.vibrate(500)
   await axios
      .get(
        `https://www.miamidade.gov/transit/WebServices/TrainTracker/?StationID=${value}`,
      )
      .then(response => {
        let convertedXML = convert.xml2js(response.data, {compact: true, spaces: 4})
        let parsedData = JSON.parse(JSON.stringify(convertedXML))
        let data = parsedData.RecordSet.Record

        if(data.NB_Time1._text === '*****'){
          this.setState({
            stationName: data.StationName._text,
  
            firstNorthTrain: 'No train',
            firstNorthTrainArrival: 'No train',
  
            secondNorthTrain: 'No train',
            secondNorthTrainArrival: 'No train',
          });

          if(data.SB_Time1._text === '*****'){
            this.setState({
              firstSouthTrain: data.SB_Time1._text,
            firstSouthTrainArrival: 'No train',
  
            secondSouthTrain: data.SB_Time2._text,
            secondSouthTrainArrival: 'No train',
            })
          }
        }
        else{
          this.setState({
            stationName: data.StationName._text,
  
            firstNorthTrain: data.NB_Time1._text,
            firstNorthTrainArrival: data.NB_Time1_Arrival._text,
  
            secondNorthTrain: data.NB_Time2._text,
            secondNorthTrainArrival: data.NB_Time2_Arrival._text,
  
            firstSouthTrain: data.SB_Time1._text,
            firstSouthTrainArrival: data.SB_Time1_Arrival._text,
  
            secondSouthTrain: data.SB_Time2._text,
            secondSouthTrainArrival: data.SB_Time2_Arrival._text,
          });
        }
      }).catch(err=>{
        console.log('error',err)
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.stationName}>{this.state.stationName} Station</Text>
        <View style={styles.trainPill} shadowColor={'black'}>
          <Text style={styles.trainHeader}>Northbound {this.props.name}</Text>
          <View style={styles.trainInfo}>
            <Text style={styles.trainNames}>1st Train</Text>
            <Text style={styles.trainNames}>2nd Train</Text>
          </View>
          <View style={styles.trainInfo}>
            <Text style={styles.trainTimes} >{this.state.firstNorthTrainArrival}</Text>
            <Text style={styles.trainTimes}>{this.state.secondNorthTrainArrival}</Text>
          </View>
        </View>
        <ImageBackground style={styles.image} source={train}></ImageBackground>
        <View style={styles.trainPill} shadowColor={'black'}>
          <Text style={styles.trainHeader}>Southbound</Text>
          <View style={styles.trainInfo}>
            <Text style={styles.trainNames}>1st Train</Text>
            <Text style={styles.trainNames}>2nd Train</Text>
          </View>

          <View style={styles.trainInfo}>
            <Text style={styles.trainTimes}>{this.state.firstSouthTrainArrival}</Text>
            <Text style={styles.trainTimes}>{this.state.secondSouthTrainArrival}</Text>
          </View>
        </View>
        
        <View style={styles.timeOfDay}>
          <TouchableOpacity
            style={styles.button}
            title="Update"
            onPress={() => this.update('DLN')}>
            <Text style={styles.buttonText}>Morning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="Update"
            onPress={() => this.update('BLK')}>
            <Text style={styles.buttonText}>Evening</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class Settings extends React.Component {

  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: 'rgba(51, 51, 51, 0.9)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() { 
    return <SettingsScreen/>;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home:{
      screen: props => <HomeScreen {...props} />,
      navigationOptions: {
        iconStyle:{
          paddingTop: 30
        },
        tabBarLabel:"Home",
        tabBarIcon:(
          <Icon name="ios-home" size={30} color='white' containerStyle={{ marginTop: 6 }}/>
        )
      },
    },
    Settings:{
      screen: props => <Settings {...props} />,
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
);

const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component{
  state={
    name: 'Alex'
  }
  render () {
    return <AppContainer name={'alex'}/>
  }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    height: Dimensions.get('window').height,
  },
  status: {
    // backgroundColor: 'white',
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  appName: {
    color:'white',

    marginTop: 40,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  stationName:{
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  timeOfDay: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: 50,
    alignItems: 'center',
    justifyContent: "center",
    padding: 40,
  },
  button: {
    // backgroundColor: 'white',
    backgroundColor: 'rgba(51, 51, 51, 0.9)',

    width: 100,
    height: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    margin: 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  buttonText:{
    color:'white',
    fontSize: 20,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  trainPill: {
    // backgroundColor: 'white',
    backgroundColor: 'rgba(51, 51, 51, 0.9)',

    marginTop: 30,
    marginBottom: 20,
    height: 150,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  trainHeader: {
    color:'white',
    marginLeft: 15,
    marginTop: 15,
    fontSize: 30,
    fontFamily: 'AppleSDGothicNeo-Bold',
    textAlign: 'center',
  },
  trainInfo: {
    marginTop: 10,
    // backgroundColor: 'red',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  trainNames: {
    color:'white',
    fontSize: 20,
    paddingLeft: 70,
    paddingRight: 70,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  trainTimes: {
    color:'white',
    fontSize: 20,
    paddingLeft: 75,
    paddingRight: 75,
    fontFamily: 'AppleSDGothicNeo-Bold',
    textAlign: "center"
  },
  imageView:{
    flex: 1,
    backgroundColor: 'red'
  },
  image:{
    marginLeft: 5,
    width: 400,
    height: 80,
  }
});

