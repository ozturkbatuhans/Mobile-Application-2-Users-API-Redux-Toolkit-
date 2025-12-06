import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import UsersContainer from './src/components/UsersContainer';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <UsersContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
});