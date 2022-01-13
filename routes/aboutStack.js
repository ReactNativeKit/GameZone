import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header';

const AboutStack = createStackNavigator();

export default function AboutScreen ({navigation}) {
  return (
      <AboutStack.Navigator
        initialRouteName='About'
        screenOptions={{ 
          gestureEnabled: false,
          headerTintColor:'#333',
          headerStyle:{
            backgroundColor:'#eee', 
            height:118
          },
          headerTitleAlign: "center" 
        }}
      >
        <AboutStack.Screen
          name='About'
          component={About}
          options={{
            headerTitle: ()=> <Header navigation={navigation} title={'About'}/>,
        }}
        />
      </AboutStack.Navigator>
  )
}