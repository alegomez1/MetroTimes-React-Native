import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Button,
  TouchableOpacity,
  Picker,
  Vibration,
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
    stationName: 'Station',

    firstNorthTrain: '',
    firstNorthTrainArrival: '',

    secondNorthTrain: '',
    secondNorthTrainArrival: '',

    firstSouthTrain: '',
    firstSouthTrainArrival: '',

    secondSouthTrain: '',
    secondSouthTrainArrival: '',
  };

  update = async value => {
    // Vibration.vibrate(500)
    axios
      .get(
        `https://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${value}`,
      )
      .then(response => {
        let data = response.data.RecordSet.Record;
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
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timeOfDay}>
          <Text>Time of day:</Text>
          <TouchableOpacity
            style={styles.button}
            title="Update"
            onPress={() => this.update('DLN')}>
            <Text style={styles.buttonText}>Morning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            title="Update"
            onPress={() => this.update('DLN')}>
            <Text style={styles.buttonText}>Evening</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.trainPill} shadowColor={'black'}>
          <Text style={styles.trainHeader}>Northbound</Text>
          <View style={styles.trainInfo}>

          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 90,
    backgroundColor: '#F5F5F5',
    height: Dimensions.get('window').height,
  },
  timeOfDay: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: 50,
    alignItems: 'center',
    marginLeft: 50,
  },
  button: {
    borderWidth: 3,
    backgroundColor: 'white',
    width: 80,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 30,
  },
  trainPill: {
    backgroundColor: 'white',
    marginTop: 50,
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
  trainHeader:{
    marginLeft: 15,
    marginTop: 15,
    fontSize: 30,
    fontFamily: 'AppleSDGothicNeo-Bold'
  },
  trainInfo:{
    backgroundColor: 'red',
    height: 50,
  }
});

export default App;
