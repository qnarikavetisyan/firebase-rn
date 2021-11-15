import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Button} from '../../components';

export const AuthScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="REGISTRATION"
        onPress={() => navigation.navigate('registration')}
      />
      <Button title="LOGIN" onPress={() => navigation.navigate('login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
