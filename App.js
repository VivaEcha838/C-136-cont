import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';


export default function App() {
  return (
    <AppContainer/>
  );
}

const AppStackNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Details: {screen: DetailsScreen}
},
{initialRouteName: "Home"})
const AppContainer = createAppContainer(AppStackNavigator)


