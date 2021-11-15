import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Button, Input} from '../../components';
import {GlobalStyles} from '../../globalStyles';

export const Registration = () => {
  const [error, setError] = useState('');
  const handleSubmit = fields => {
    const {email, password} = fields;
    setError('');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
        console.log('User account created & signed in!');
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message.split('] ')[1]);
      });
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('email')
      .required('Обязательное поле')
      .min(6, 'Не менее 6 символов'),
    password: Yup.string()
      .required('Обязательное поле')
      .min(6, 'Не менее 6 символов'),
    verify_password: Yup.string()
      .required('required')
      .oneOf([Yup.ref('password'), null], 'Введенные пароли не совпадают'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
      verify_password: '',
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={GlobalStyles.container}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Input
            placeholder="Email"
            touched={formik.touched.email}
            error={formik.errors.email}
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            touched={formik.touched.password}
            error={formik.errors.password}
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            touched={formik.touched.verify_password}
            error={formik.errors.verify_password}
            onChangeText={formik.handleChange('verify_password')}
            onBlur={formik.handleBlur('verify_password')}
            value={formik.values.verify_password}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={GlobalStyles.error}>{error}</Text>
            <Button title="Submit" onPress={formik.handleSubmit} />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({});
