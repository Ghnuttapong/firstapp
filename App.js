import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './common-styles';
import ColumnItems from './column-items';

export default function App() {
  return (
    <View>
      <Text style={ commonStyles.flex }>Open up App.js to start working on your app!</Text>
      <ColumnItems />
      <StatusBar style="auto" />
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: '#fff',  
  },
  
});
 */