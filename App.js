import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';


import axios from 'axios';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {variableDeclaration} from '@babel/types';

class App extends React.Component {
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
    axios
      .get(
        `https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${value}`,
      )
      .then(response => {
        let data = response.data.RecordSet.Record;

        if(data.NB_Time1 === '*****'){
          this.setState({
            stationName: data.StationName,
  
            firstNorthTrain: 'No train',
            firstNorthTrainArrival: 'No train',
  
            secondNorthTrain: 'No train',
            secondNorthTrainArrival: 'No train',
  
            firstSouthTrain: data.SB_Time1,
            firstSouthTrainArrival: data.SB_Time1_Arrival,
  
            secondSouthTrain: data.SB_Time2,
            secondSouthTrainArrival: data.SB_Time2_Arrival,
          });
        } else{
          this.setState({
            stationName: data.StationName,
  
            firstNorthTrain: data.NB_Time1,
            firstNorthTrainArrival: data.NB_Time1_Arrival,
  
            secondNorthTrain: data.NB_Time2,
            secondNorthTrainArrival: data.NB_Time2_Arrival,
  
            firstSouthTrain: data.SB_Time1,
            firstSouthTrainArrival: data.SB_Time1_Arrival,
  
            secondSouthTrain: data.SB_Time2,
            secondSouthTrainArrival: data.SB_Time2_Arrival,
          });
        }

      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.status}>
          <Text style={styles.appName}>Metro Times</Text>
        </View>

        <Text style={styles.stationName}>{this.state.stationName} Station</Text>
        <View style={styles.trainPill} shadowColor={'black'}>
          <Text style={styles.trainHeader}>Northbound</Text>
          <View style={styles.trainInfo}>
            <Text style={styles.trainNames}>1st Train</Text>
            <Text style={styles.trainNames}>2nd Train</Text>
          </View>

          <View style={styles.trainInfo}>
            <Text style={styles.trainTimes} >{this.state.firstNorthTrainArrival}</Text>
            <Text style={styles.trainTimes}>{this.state.secondNorthTrainArrival}</Text>
          </View>
        </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 0,
    backgroundColor: '#F5F5F5',
    height: Dimensions.get('window').height,
  },
  status: {
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
    fontSize: 20,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  trainPill: {
    backgroundColor: 'white',
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
    fontSize: 20,
    paddingLeft: 70,
    paddingRight: 70,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  trainTimes: {
    fontSize: 20,
    paddingLeft: 75,
    paddingRight: 75,
    fontFamily: 'AppleSDGothicNeo-Bold',
    textAlign: "center"
  },
  image:{
    flex: 1,
    width: 100,
    height: 100,
  }
});

export default App;
