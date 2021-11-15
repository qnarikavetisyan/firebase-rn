import React from 'react';
import {View, StyleSheet} from 'react-native';
import MainNavigator from './routes/mainNavigator';

export default MyApp = () => {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
