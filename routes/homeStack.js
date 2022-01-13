import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const HomeStack = createStackNavigator();

export default function HomeScreen ({navigation}) {
  return (
      <HomeStack.Navigator
        initialRouteName='Home'
        screenOptions={{ 
          gestureEnabled: false,
          headerTintColor:'#333',
          headerStyle:{
            backgroundColor:'#eee', 
          },
          headerTitleAlign: "center" 
        }}
      >
        <HomeStack.Screen
          name='Home'
          component={Home}
          options={{
            headerTitle: ()=> <Header navigation={navigation} title={'GameZone'}/>,
        }}
        />
        <HomeStack.Screen
          name='ReviewDetails'
          component={ReviewDetails}
          options={{title:'Review'}}
        />
      </HomeStack.Navigator>
  )
}