import React, { Component } from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Button title="Klik Saya" onPress={ ()=>{ Linking.openURL('https://wahyu9kdl.github.io/DASHBOARD/TOOLS/CodeSandbox.html')}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
