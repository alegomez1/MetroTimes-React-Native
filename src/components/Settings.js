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

import {changeName, changeMorningStation} from '../actions';

class Settings extends Component {
  state = {
    viewModal: false,
  };

  setModalVisible(visible) {
    this.setState({viewModal: visible});
  }

  render() {
    const data = [
      {label: 'Dadeland South', value: 'DLS'},
      {label: 'Dadeland North', value: 'DLN'},
      {label: 'Brickell', value: 'BLK'},
    ];
    return (
      <ScrollView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.viewModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

            <View
            >
            <TouchableOpacity
          onPress={() => this.props.changeMorningStation('DLS')}>
          <Text style={styles.clickMe}>CLICK ME</Text>
        </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>

        </Modal>

        <Text style={styles.pageTitle}>Settings</Text>


        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <Text style={styles.pageTitle}>SHOW MODAL</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  console.log('current state', state);
  return {state};
};
export default connect(mapStateToProps, {changeName, changeMorningStation})(
  Settings,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
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
  clickMe: {
    color: 'black',
    textAlign: "center",
    fontSize: 20,
    marginTop: 50
  },
  modal:{
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});
