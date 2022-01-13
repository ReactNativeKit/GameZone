import React from 'react';
import { Text, View } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/Card';

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={{fontWeight:'bold'}}>About: </Text>
      <Card>
        <Text>
          GameZone is a review app based on React Native. It is developed and published by GameZone Inc.
        </Text> 
        <Text>GameZone Inc. © 2021. All Rights Reserved.</Text>
      </Card>
    </View>
  )
}

export default About;