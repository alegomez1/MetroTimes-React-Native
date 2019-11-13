import React, {Component} from 'react';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Picker,
  Modal,
} from 'react-native';

import {connect} from 'react-redux';

import {
  changeName,
  changeMorningStation,
  changeEveningStation,
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

  render() {
    return (
      <View style={styles.container}>
        {/* Morning Station Modal Start */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.viewModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Text style={styles.doneText}>Exit</Text>
              </TouchableOpacity>
              <ScrollView>
                <TouchableOpacity onPress={() => this.setMorningStation('ALP')}>
                  <Text style={styles.stationName}>Allapattah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('BLK')}>
                  <Text style={styles.stationName}>Brickell</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('BVL')}>
                  <Text style={styles.stationName}>Brownsville</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CVC')}>
                  <Text style={styles.stationName}>Civic Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CGV')}>
                  <Text style={styles.stationName}>Coconut Grove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CUL')}>
                  <Text style={styles.stationName}>Culmer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DLN')}>
                  <Text style={styles.stationName}>Dadeland North</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DLS')}>
                  <Text style={styles.stationName}>Dadeland South</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DRD')}>
                  <Text style={styles.stationName}>Douglas Road</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('MLK')}>
                  <Text style={styles.stationName}>
                    Dr. Martin Luther King, Jr.
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('EHT')}>
                  <Text style={styles.stationName}>Earlington Heights</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('GVT')}>
                  <Text style={styles.stationName}>Government Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('HIA')}>
                  <Text style={styles.stationName}>Hialeah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('OVT')}>
                  <Text style={styles.stationName}>
                    Historic Overtown/Lyric Theatre
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('MIA')}>
                  <Text style={styles.stationName}>
                    Miami International Airport
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('NSD')}>
                  <Text style={styles.stationName}>Northside</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('OKE')}>
                  <Text style={styles.stationName}>Okeechobee</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('PAL')}>
                  <Text style={styles.stationName}>Palmetto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('SCL')}>
                  <Text style={styles.stationName}>Santa Clara</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('SMI')}>
                  <Text style={styles.stationName}>South Miami</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('TRI')}>
                  <Text style={styles.stationName}>Tri-Rail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('UNV')}>
                  <Text style={styles.stationName}>University</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('VIZ')}>
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
            <View style={styles.modal}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible2(false);
                }}>
                <Text style={styles.doneText}>Exit</Text>
              </TouchableOpacity>
              <ScrollView>
                <TouchableOpacity onPress={() => this.setEveningStation('ALP')}>
                  <Text style={styles.stationName}>Allapattah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('BLK')}>
                  <Text style={styles.stationName}>Brickell</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('BVL')}>
                  <Text style={styles.stationName}>Brownsville</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CVC')}>
                  <Text style={styles.stationName}>Civic Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CGV')}>
                  <Text style={styles.stationName}>Coconut Grove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CUL')}>
                  <Text style={styles.stationName}>Culmer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DLN')}>
                  <Text style={styles.stationName}>Dadeland North</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DLS')}>
                  <Text style={styles.stationName}>Dadeland South</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DRD')}>
                  <Text style={styles.stationName}>Douglas Road</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('MLK')}>
                  <Text style={styles.stationName}>
                    Dr. Martin Luther King, Jr.
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('EHT')}>
                  <Text style={styles.stationName}>Earlington Heights</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('GVT')}>
                  <Text style={styles.stationName}>Government Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('HIA')}>
                  <Text style={styles.stationName}>Hialeah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('OVT')}>
                  <Text style={styles.stationName}>
                    Historic Overtown/Lyric Theatre
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('MIA')}>
                  <Text style={styles.stationName}>
                    Miami International Airport
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('NSD')}>
                  <Text style={styles.stationName}>Northside</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('OKE')}>
                  <Text style={styles.stationName}>Okeechobee</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('PAL')}>
                  <Text style={styles.stationName}>Palmetto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('SCL')}>
                  <Text style={styles.stationName}>Santa Clara</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('SMI')}>
                  <Text style={styles.stationName}>South Miami</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('TRI')}>
                  <Text style={styles.stationName}>Tri-Rail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('UNV')}>
                  <Text style={styles.stationName}>University</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('VIZ')}>
                  <Text style={styles.stationName}>Vizcaya</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
        {/* Evening Station Modal End */}
        <Text style={styles.pageTitle}>Settings</Text>


        <Text style={styles.settingsHeader}>Change stations</Text>
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => this.setModalVisible(true)}>
            <Text style={styles.settingsOption}>
              Change Morning Station
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setModalVisible(true)}>
            <Text style={styles.settingsOptionRight}>
              {this.props.state.morningStation}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => this.setModalVisible2(true)}>
          <Text style={styles.settingsOption}>
            Change Evening Station
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setModalVisible2(true)}>
          <Text style={styles.settingsOptionRight}>
            {this.props.state.eveningStation}
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('current state', state);
  return {state};
};
export default connect(mapStateToProps, {
  changeName,
  changeMorningStation,
  changeEveningStation,
})(Settings);

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    height: Dimensions.get('window').height,
  },

  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    height: Dimensions.get('window').height,
  },
  pageTitle: {
    fontFamily: 'AppleSDGothicNeo-Bold',
    marginTop: 40,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    color: 'white',
  },
  stationName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    borderRadius: 40,
    width: 400,
    height: 400,
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    color: 'white',
  },
  doneText: {
    color: 'white',
    textAlign: 'right',
    justifyContent: 'flex-end',
    marginTop: 40,
    marginRight: 40,
    fontSize: 17,
  },
  settingsHeader:{
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 30,
  },
  settingsOption: {
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
    // marginTop: 20,
  },
  settingsOptionRight: {
    color: 'white',
    fontSize: 18,
    marginRight: 20,
    // marginTop: 20,
  },
  itemContainer: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderTopColor: 'white',
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
});
