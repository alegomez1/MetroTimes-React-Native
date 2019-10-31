import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default class Settings extends React.Component {

  state={
    //Picker Data
  valueText: undefined,
  selectedIndex: null,
  data: [
      "Javascript",
      "Go",
      "Java",
      "Kotlin",
      "C++",
      "C#",
      "PHP"
  ]
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.pageTitle}>Settings</Text>

      </ScrollView>
    );
  }
}

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
});
