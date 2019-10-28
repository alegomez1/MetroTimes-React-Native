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
  Vibration
} from 'react-native';


import axios from 'axios';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { variableDeclaration } from '@babel/types';

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

  componentDidMount() {}

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
        <Text style={[styles.title, styles.alignCenter]}>Metro Times</Text>

        <View style={styles.trainInfoContainer}>
          <Text style={styles.header}>{this.state.stationName}</Text>
          <Text style={styles.subHeader}>Northbound </Text>
          <Text style={styles.trainText}>1st Train: {this.state.firstNorthTrainArrival}-----{this.state.firstNorthTrain}</Text>
          <Text style={styles.trainText}>2nd Train: {this.state.secondNorthTrainArrival}-----{this.state.secondNorthTrain}</Text>
          <Text style={styles.subHeader}>Southbound </Text>
          <Text style={styles.trainText}>1st Train: {this.state.firstSouthTrainArrival}-----{this.state.firstSouthTrain}</Text>
          <Text style={styles.trainText}>2nd Train: {this.state.secondSouthTrainArrival}-----{this.state.secondSouthTrain}</Text>
        </View>

        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={styles.button}
            title="Update"
            onPress={() => this.update('DLN')}>
            <Text style={styles.buttonText}>Dadeland</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            title="Update"
            onPress={() => this.update('BLK')}>
            <Text style={styles.buttonText}>Brickell</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#343A40',
    height: Dimensions.get('window').height,
  },
  trainInfoContainer: {
    // backgroundColor: 'red',
    paddingLeft: 20,
  },
  alignCenter: {
    textAlign: 'center',
  },
  title: {
    fontSize: 50,
    paddingTop: 50,
    paddingLeft: 20,
    // textAlign: "center",
    color: 'white',
    fontWeight: "bold"
  },
  header: {
    fontSize: 45,
    paddingTop: 50,
    color: 'white',
    fontWeight: "bold"
  },
  subHeader: {
    fontSize: 40,
    paddingTop: 30,
    color: 'white',
    fontWeight: "bold"

  },
  trainText: {
    fontSize: 20,
    paddingTop: 10,
    color: 'white',
  },
  button: {
    borderWidth: 3,
    backgroundColor: 'white',
    width: 150,
    height: 70,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'blue',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: "center",
    width: Dimensions.get('window').width,
  },
  picker: {
    fontSize: 60,
    marginLeft: 50,
    marginTop: 100,
    textAlign: 'center',
  },
});

export default App;
