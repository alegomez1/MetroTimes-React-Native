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
import train from "../../assets/metroPNG.png"
import convert from 'xml-js'
import { connect } from 'react-redux'

class Trains extends React.Component {
// This state is used to change the station name and times of all the trains 
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
// Runs the update function at at the opening of the component so set the morning and evening stations based on the user's preferences
  componentDidMount = () =>{
    this.update(this.props.state.morningStation)
    this.update(this.props.state.eveningStation)
  }
/**
 * Update function makes an Axios call to the Miami Dade API in order to fetch the data of the stations
 * The data is returned in XML format so it's then converted to JSON for easy parsing
 * There's two if statements to check if what is returned is ***** meaning that there is no train
 * Otherwise it updates the state with the data fetched from the API
 */
  update = async value => {
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
    // This constant checks to see whether or not Dark Mode has been enabled by the user
    const darkMode = this.props.state.darkMode

    return (
      // Each component has a ternary operator that checks if dark mode is enabled and passes the respective styles based on that 
      <View style={darkMode ? styles.container : styles.containerLight}>
        <Text style={[styles.stationName, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>{this.state.stationName} Station</Text>
        <View style={darkMode ? styles.trainPill : styles.trainPillLight} shadowColor={'black'}>
          <Text style={[styles.trainHeader, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>Northbound</Text>
          <View style={styles.trainInfo}>
            <Text style={[styles.trainNames, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>1st Train</Text>
            <Text style={[styles.trainNames, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>2nd Train</Text>
          </View>
          <View style={styles.trainInfo}>
            <Text style={[styles.trainTimes, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]} >{this.state.firstNorthTrainArrival}</Text>
            <Text style={[styles.trainTimes, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>{this.state.secondNorthTrainArrival}</Text>
          </View>
        </View>
        <ImageBackground style={styles.image} source={train}></ImageBackground>
        <View style={darkMode ? styles.trainPill : styles.trainPillLight} shadowColor={'black'}>
          <Text style={[styles.trainHeader, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>Southbound</Text>
          <View style={styles.trainInfo}>
            <Text style={[styles.trainNames, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>1st Train</Text>
            <Text style={[styles.trainNames, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>2nd Train</Text>
          </View>

          <View style={styles.trainInfo}>
            <Text style={[styles.trainTimes, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>{this.state.firstSouthTrainArrival}</Text>
            <Text style={[styles.trainTimes, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>{this.state.secondSouthTrainArrival}</Text>
          </View>
        </View>
        
        <View style={styles.timeOfDay}>
          {/* The Morning and Evening buttons both run the update function to refresh the info displayed (done through another API call) */}
          <TouchableOpacity
            style={darkMode ? styles.button : styles.buttonLight}
            title="Update"
            onPress={() => this.update(this.props.state.morningStation)}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>Morning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={darkMode ? styles.button : styles.buttonLight}
            title="Update"
            onPress={() => this.update(this.props.state.eveningStation)}>
            <Text style={[styles.buttonText, darkMode ? styles.darkModeTextColor : styles.lightModeTextColor]}>Evening</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Mapping the state and connecting it to the Trains component for Redux
const mapStateToProps = (state) => {
  return { state }
}
export default connect(mapStateToProps)(Trains)
// Styles for these components in alphabetical order
const styles = StyleSheet.create({
  appName: {
    color:'white',
    marginTop: 40,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  button: {
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
    buttonLight: {
    backgroundColor: '#c4c4c4',
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
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    height: Dimensions.get('window').height,
  },
  containerLight: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#dbdbdb',
    height: Dimensions.get('window').height,
  },
  darkModeTextColor:{
    color: 'white'
  },
  image:{
    marginLeft: 5,
    width: 400,
    height: 80,
  },
  imageView:{
    flex: 1,
    backgroundColor: 'red'
  },
  lightModeTextColor:{
    color: '#3d3d3d',
  },
  status: {
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
  stationName:{
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center',
  },
  timeOfDay: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: "center",
    padding: 40,
  },
  trainPill: {
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
  trainPillLight: {
    backgroundColor: '#c4c4c4',
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
});