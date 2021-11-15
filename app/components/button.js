import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export const Button = ({title, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    height: 68,
    backgroundColor: '#E3A164',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});
