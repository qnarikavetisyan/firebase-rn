import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, Card} from '../../components';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    database()
      .ref('/catalogue')
      .on('value', data => {
        console.log(data.val());
        setData(data.val());
      });
  }, []);

  // const handleSubmit = () => {
  //   auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentStyle}>
        {data.map((item, i) => (
          <Card
            key={i}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </ScrollView>
      {/* <Button title="Sign out" onPress={() => handleSubmit()} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
