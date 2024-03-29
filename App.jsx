import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import CarsList from './components/carsList';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
