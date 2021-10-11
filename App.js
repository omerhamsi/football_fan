import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Login from  './src/Login'
import Game from './src/Game'
import Home from './src/Home'
import Listing  from './src/Listing'
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import {createBottomTabNavigator} from "react-navigation-tabs"
 class App extends Component {
  render() {
    return (
      <View>
        <Login/>
      </View>
    )
  }
}
const AppNavigator=createBottomTabNavigator({
  Login:{
    screen:App
  },
  Home:{
    screen:Home
  },
  Listing:{
    screen:Listing
  },
  Game:{
    screen:Game
  }
})
export default createAppContainer(AppNavigator);
