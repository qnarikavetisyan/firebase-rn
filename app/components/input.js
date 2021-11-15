import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

export const Input = ({style, placeholder, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, style]}
        placeholderTextColor="#9D9FB7"
        placeholder={placeholder}
      />
      {props.error && props.touched ? (
        <Text style={styles.error}>{props.error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    width: '84%',
    height: 48,
    backgroundColor: '#F5F5F9',
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  error: {
    color: '#FF5F5F',
    marginTop: 3,
    marginLeft: 7,
    flexShrink: 1,
  },
});
