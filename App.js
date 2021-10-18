import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import facebook from './screens/fb';
import instagram from './screens/in';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  instagram: { screen: instagram },
  facebook: { screen: facebook }
})


const AppContainer = createAppContainer(TabNavigator)