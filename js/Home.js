import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Welcome from './Welcome'

const screens = {
  Welcome,
}

export default Home = props => {
  const [screen, setScreen] = useState('Welcome')
  
  return <View>
    {screens[screen]()}
  </View>
}

Home.navigationOptions ={
  title: 'Home'
}