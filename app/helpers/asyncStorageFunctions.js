import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    let user = JSON.parse(await AsyncStorage.getItem('user'));
    let access_token = await AsyncStorage.getItem('access_token');
    return {access_token, user};
  } catch (error) {
    console.log(error);
  }
};

export const setTokens = async data => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(data.user));
    await AsyncStorage.setItem('access_token', data.access_token);
  } catch (error) {
    console.log(error);
  }
};

export const setUser = async data => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
