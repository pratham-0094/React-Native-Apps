/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import home from './component/home';
import category from './component/category';
import item from './component/item';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={home} />
      <Stack.Screen name="Category" component={category} />
      <Stack.Screen name="Item" component={item} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default App;
