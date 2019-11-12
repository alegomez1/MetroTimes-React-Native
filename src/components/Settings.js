import React, { Component } from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { connect } from 'react-redux'

import { changeName, changeMorningStation } from '../actions'

class Settings extends Component {

  render()
{

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.pageTitle}>Settings</Text>
        <TouchableOpacity onPress={()=> this.props.changeMorningStation('DLS')}><Text>CLICK ME</Text></TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('current state', state)
  return { state }
}
export default connect(mapStateToProps, {changeName, changeMorningStation})(Settings)



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
  text:{
    color: 'white'
  }
});
