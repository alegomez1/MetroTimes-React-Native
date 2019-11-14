import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  Switch,

} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {connect} from 'react-redux';

import {
  changeName,
  changeMorningStation,
  changeEveningStation,
  toggleDarkMode,
} from '../actions';

class Settings extends Component {
  state = {
    viewModal: false,
    viewModal2: false,
  };

  setModalVisible(visible) {
    this.setState({viewModal: visible});
  }
  setModalVisible2(visible) {
    this.setState({viewModal2: visible});
  }

  setMorningStation = stationInitials => {
    this.props.changeMorningStation(stationInitials);
    this.setModalVisible(false);
  };
  setEveningStation = stationInitials => {
    this.props.changeEveningStation(stationInitials);
    this.setModalVisible2(false);
  };


  onSwipeDown = () =>{
    console.log('swiped down')
  }

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 40
    };
    // console.log('props---', this.props)
    const darkMode = this.props.state.darkMode;
    return (
      <View style={darkMode ? styles.container : styles.containerLight}>
        {/* Morning Station Modal Start */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.viewModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

  
          <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.secret}
           onPress={() => {
                  this.setModalVisible(false)}}>
          </TouchableOpacity>
            <View style={styles.modal}>


            {/* <GestureRecognizer
        config={config}
        onSwipeDown={()=> this.props.toggleDarkMode(!this.props.state.darkMode)}
        onSwipeLeft={()=> this.props.toggleDarkMode(!this.props.state.darkMode)}
        onSwipeRight={()=> this.props.toggleDarkMode(!this.props.state.darkMode)}
        style={{
          width: 800, height: 50, 
        }} > */}
              <View style={styles.exitContainer }>
              <View>
                <TouchableOpacity 
                style={styles.exitButton}
                onPress={() => {
                  this.setModalVisible(false)
                }}>
                <Text style={styles.doneText}>Exit</Text>

                </TouchableOpacity>
              </View>
              </View>
                {/* </GestureRecognizer> */}



              





              <ScrollView style={styles.testHeight}>
                <TouchableOpacity onPress={() => this.setMorningStation('ALP')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Allapattah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('BLK')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Brickell</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('BVL')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Brownsville</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CVC')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Civic Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CGV')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Coconut Grove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CUL')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Culmer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DLN')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Dadeland North</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DLS')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Dadeland South</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DRD')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Douglas Road</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('MLK')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>
                    Dr. Martin Luther King, Jr.
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('EHT')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Earlington Heights</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('GVT')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Government Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('HIA')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Hialeah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('OVT')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>
                    Historic Overtown/Lyric Theatre
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('MIA')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>
                    Miami International Airport
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('NSD')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Northside</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('OKE')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Okeechobee</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('PAL')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Palmetto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('SCL')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Santa Clara</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('SMI')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>South Miami</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('TRI')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Tri-Rail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('UNV')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>University</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('VIZ')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Vizcaya</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>

          </View>
        </Modal>
        {/* Morning Station Modal End */}

        {/* Evening Station Modal Start */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.viewModal2}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.secret}
           onPress={() => {
                  this.setModalVisible2(false)}}>
          </TouchableOpacity>
            <View style={styles.modal}>
              <View style={styles.exitContainer }>
                <TouchableOpacity 
                style={styles.exitButton}
                onPress={() => {
                  this.setModalVisible2(false)
                  
                }}>
                <Text style={styles.doneText}>Exit</Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.testHeight}>
                <TouchableOpacity onPress={() => this.setEveningStation('ALP')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Allapattah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('BLK')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Brickell</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('BVL')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Brownsville</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CVC')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Civic Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CGV')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Coconut Grove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CUL')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Culmer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DLN')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Dadeland North</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DLS')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Dadeland South</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DRD')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Douglas Road</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('MLK')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>
                    Dr. Martin Luther King, Jr.
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('EHT')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Earlington Heights</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('GVT')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Government Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('HIA')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Hialeah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('OVT')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>
                    Historic Overtown/Lyric Theatre
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('MIA')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>
                    Miami International Airport
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('NSD')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Northside</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('OKE')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Okeechobee</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('PAL')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Palmetto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('SCL')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Santa Clara</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('SMI')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>South Miami</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('TRI')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Tri-Rail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('UNV')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>University</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('VIZ')}
                style={styles.stationItem}
                >
                  <Text style={styles.stationName}>Vizcaya</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
        {/* Evening Station Modal End */}
        <Text style={darkMode ? styles.pageTitle : styles.pageTitleLight}>
          Settings
        </Text>

        <Text
          style={darkMode ? styles.settingsHeader : styles.settingsHeaderLight}>
         🚈  Change stations
        </Text>

        <TouchableOpacity
          style={darkMode ? [styles.itemContainer, styles.itemContainerStart] : [styles.itemContainerLight, styles.itemContainerStartLight]}
          onPress={() => this.setModalVisible(true)}
          >
            <Text
              style={
                darkMode ? styles.settingsOption : styles.settingsOptionLight
              }>
              ☀️  Set Morning Station
            </Text>
            <Text
              style={
                darkMode
                  ? styles.settingsOptionRight
                  : styles.settingsOptionRightLight
              }>
              {this.props.state.morningStation}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ darkMode ? [styles.itemContainerEnd, styles.itemContainer] : [styles.itemContainerLight, styles.itemContainerEndLight]}
          onPress={() => this.setModalVisible2(true)}
          >
            <Text
              style={
                darkMode ? styles.settingsOption : styles.settingsOptionLight
              }>
              🌙  Set Evening Station
            </Text>
            <Text
              style={
                darkMode
                  ? styles.settingsOptionRight
                  : styles.settingsOptionRightLight
              }>
              {this.props.state.eveningStation}
            </Text>
        </TouchableOpacity>

        <Text
          style={darkMode ? styles.settingsHeader : styles.settingsHeaderLight}>
         🖥  Display
        </Text>

        <View
          style={darkMode ? [styles.itemContainer, styles.itemContainerStart] : [styles.itemContainerLight, styles.itemContainerStartLight]}>
          <View>
            <Text
              style={
                darkMode ? styles.settingsOption : styles.settingsOptionLight
              }>
             🌘  Dark Mode
            </Text>
          </View>

          <Switch
            style={styles.toggle}
            value={this.props.state.darkMode}
            onChange={() =>
              this.props.toggleDarkMode(!this.props.state.darkMode)
            }></Switch>



        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {state};
};
export default connect(mapStateToProps, {
  changeName,
  changeMorningStation,
  changeEveningStation,
  toggleDarkMode,
})(Settings);

const styles = StyleSheet.create({
  secret:{
    width: Dimensions.get('window').width,
    height: 295,
    // backgroundColor: 'red',
    zIndex: 5
  },
  backgroundContainer: {
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    height: Dimensions.get('window').height,
  },
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    height: Dimensions.get('window').height,
  },
  containerLight: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#dbdbdb',
    height: Dimensions.get('window').height,
  },
  pageTitle: {
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  pageTitleLight: {
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  text: {
    color: 'white',
  },
  stationItem:{
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    height: 60,
    justifyContent: 'center',

  },
  stationName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modal: {
    // marginTop: 300,
    zIndex: 10,
    borderRadius: 20,
    width: 400,
    height: 600,
    backgroundColor: 'rgba(51, 51, 51, 1)',
    color: 'white',
  },
  testHeight:{
    marginBottom: 50,
  },
  exitContainer:{
    backgroundColor: '#dd2727',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    justifyContent: "center",
    width: 400
  },
  exitButton:{
    // backgroundColor: 'green',
    // width: 400,
    width: 80,
    height: 50,
    justifyContent: "center"
  },
  doneText: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold"
  },
  settingsHeader: {
    color: '#adadad',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 30,
  },
  settingsHeaderLight: {
    color: '#7c7c7c',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 30,
  },
  settingsOption: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  settingsOptionLight: {
    color: '#3d3d3d',
    fontSize: 18,
    marginLeft: 10,
  },
  settingsOptionRight: {
    color: '#adadad',
    fontSize: 18,
    marginRight: 20,
  },
  settingsOptionRightLight: {
    color: '#898989',
    fontSize: 18,
    marginRight: 20,
  },
  settingsTab: {
    backgroundColor: 'red',
    height: 40,
  },
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainerLight: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#c4c4c4',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: 'white',
  },
  itemContainerStart:{
    borderTopColor: '#c4c4c4',
    borderTopWidth: 0.2,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.2,
  },
  itemContainerStartLight:{
    borderTopColor: 'black',
    borderTopWidth: 0.2,
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
  },
  itemContainerEnd:{
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.2,
  },
  itemContainerEndLight:{
    borderBottomColor: 'black',
    borderBottomWidth: 0.2,
  },
  toggle: {
    marginRight: 10,
  },
});
