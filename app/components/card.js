import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import {Button} from './button';

export const Card = ({id, name, price, description, image, onPress}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} resizeMode="cover" style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.section}>
        <Text style={styles.price}>{price} AMD</Text>
        <TouchableOpacity style={styles.buyButton} onPress={onPress}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 15,
    alignItems: 'center',
    flexShrink: 1,
    backgroundColor: '#fff',
    width: 160,
    height: 200,
    borderRadius: 5,
    elevation: 10,
    margin: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  image: {
    width: 60,
    height: 60,
  },
  description: {
    fontSize: 13,
    fontWeight: '600',
    marginHorizontal: 12,
    textAlign: 'center',
    flexShrink: 1,
  },
  section: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 12,
  },
  buyButton: {
    width: 60,
    height: 25,
    borderRadius: 15,
    backgroundColor: '#E3A164',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 10,
  },
});
