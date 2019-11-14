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

import {connect} from 'react-redux';

import {
  changeName,
  changeMorningStation,
  changeEveningStation,
  toggleDarkMode,
} from '../actions';

class Settings extends Component {
  state = {
    morningStationsModal: false,
    eveningStationsModal: false,
  };

  setModalVisible(visible) {
    this.setState({morningStationsModal: visible});
  }
  setModalVisible2(visible) {
    this.setState({eveningStationsModal: visible});
  }
  setMorningStation = stationInitials => {
    this.props.changeMorningStation(stationInitials);
    this.setModalVisible(false);
  };
  setEveningStation = stationInitials => {
    this.props.changeEveningStation(stationInitials);
    this.setModalVisible2(false);
  };
  setModalFalse = () =>{
    console.log('making false')
    this.setState({morningStationsModal: false, eveningStationsModal: false})
  }

  morningStationsModal = async (modal) => {
    if(modal === 'morning'){

      if(this.state.morningStationsModal === true){
        console.log('current state', this.state)
       await this.setModalFalse()
        console.log('should now be false',this.state)
          this.setState({morningStationsModal:true})
          console.log('should now be true.....', this.state)
      }else{
        this.setState({morningStationsModal:true})
    }

  }else if(modal === 'evening'){
    if(this.state.eveningStationsModal === true){
      console.log('current state', this.state)
     await this.setModalFalse()
      console.log('should now be false',this.state)
        this.setState({eveningStationsModal:true})
        console.log('should now be true.....', this.state)
    }else{
      this.setState({eveningStationsModal:true})
  }
  }
}

  render() {
    // console.log('props---', this.props)
    const darkMode = this.props.state.darkMode;

    return (
      <View style={darkMode ? styles.container : styles.containerLight}>
        {/* Morning Station Modal Start */}
        <Modal
          animationType="slide"
          presentationStyle={'formSheet'}
          visible={this.state.morningStationsModal}
          onDismiss={()=> console.log('dismissed')}
          onRequestClose={() => console.log('been closed')}>
          <View style={styles.modalContainer}>
            <View style={darkMode ? styles.modal : styles.modalLight}>
              <View style={darkMode ? styles.exitContainer : styles.exitContainerLight }>
              <View>
                <TouchableOpacity 
                style={styles.exitButton}
                onPress={() => {
                  this.setModalVisible(false)
                }}>
                <Text style={styles.exitText}>Exit</Text>
                </TouchableOpacity>
              </View>
              </View>

              <ScrollView style={styles.testHeight}>
                <TouchableOpacity onPress={() => this.setMorningStation('ALP')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Allapattah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('BLK')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Brickell</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('BVL')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Brownsville</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CVC')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Civic Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CGV')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Coconut Grove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('CUL')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Culmer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DLN')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Dadeland North</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DLS')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Dadeland South</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('DRD')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Douglas Road</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('MLK')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>
                    Dr. Martin Luther King, Jr.
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('EHT')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Earlington Heights</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('GVT')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Government Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('HIA')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Hialeah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('OVT')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>
                    Historic Overtown/Lyric Theatre
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('MIA')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>
                    Miami International Airport
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('NSD')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Northside</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('OKE')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Okeechobee</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('PAL')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Palmetto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('SCL')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Santa Clara</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('SMI')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>South Miami</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('TRI')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Tri-Rail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('UNV')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>University</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setMorningStation('VIZ')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={ darkMode ? styles.stationName : styles.stationNameLight}>Vizcaya</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>

          </View>
        </Modal>
        {/* Morning Station Modal End */}

        {/* Evening Station Modal Start */}
        <Modal
          animationType="slide"
          presentationStyle={'formSheet'}
          visible={this.state.eveningStationsModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.modalContainer}>

            <View style={darkMode ? styles.modal : styles.modalLight}>
              <View style={darkMode ? styles.exitContainer : styles.exitContainerLight }>
                <TouchableOpacity 
                style={styles.exitButton}
                onPress={() => {
                  this.setModalVisible2(false)
                }}>
                <Text style={styles.exitText}>Exit</Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.testHeight}>
                <TouchableOpacity onPress={() => this.setEveningStation('ALP')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Allapattah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('BLK')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Brickell</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('BVL')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Brownsville</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CVC')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Civic Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CGV')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Coconut Grove</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('CUL')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Culmer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DLN')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Dadeland North</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DLS')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Dadeland South</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('DRD')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Douglas Road</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('MLK')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}> Dr. Martin Luther King, Jr.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('EHT')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Earlington Heights</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('GVT')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Government Center</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('HIA')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Hialeah</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('OVT')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>
                    Historic Overtown/Lyric Theatre
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('MIA')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>
                    Miami International Airport
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('NSD')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Northside</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('OKE')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Okeechobee</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('PAL')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Palmetto</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('SCL')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Santa Clara</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('SMI')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>South Miami</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('TRI')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Tri-Rail</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('UNV')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>University</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setEveningStation('VIZ')}
                style={darkMode ? styles.stationItem : styles.stationItemLight}
                >
                  <Text style={darkMode ? styles.stationName : styles.stationNameLight}>Vizcaya</Text>
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
          onPress={() => this.morningStationsModal('morning')}
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
          onPress={() => this.morningStationsModal('evening')}
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
    borderBottomColor: '#777777',
    borderBottomWidth: 0.2,
    height: 50,
    justifyContent: 'center',
  },
  stationItemLight:{
    borderBottomColor: '#777777',
    borderBottomWidth: 0.2,
    height: 50,
    justifyContent: 'center',
  },
  stationName: {
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 35
  },
  stationNameLight: {
    color: '#333333',
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 35
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modal: {
    zIndex: 10,
    borderRadius: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(51, 51, 51, 1)',
    color: 'white',
  },
  modalLight: {
    // marginTop: 300,
    zIndex: 10,
    borderRadius: 20,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#e5e5e5',
    color: 'white',
  },
  testHeight:{
    marginBottom: 50,
  },
  exitContainer:{
    backgroundColor: '#dd2727',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 60,
    justifyContent: "center",
    alignItems: 'flex-end',
    width: Dimensions.get('window').width,
  },
  exitContainerLight:{
    backgroundColor: '#f24141',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 60,
    justifyContent: "center",
    alignItems: 'flex-end',
    width: Dimensions.get('window').width,
  },
  exitButton:{
    // backgroundColor: 'green',
    width: 80,
    height: 50,
    justifyContent: "center"
  },
  exitText: {
    textAlign: 'center',
    color: 'white',
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
