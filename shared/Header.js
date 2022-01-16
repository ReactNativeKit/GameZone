import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({navigation, title}) => {
  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
        <MaterialIcons name="menu" size={25} backgroundColor='#eee' color='#333' style={styles.icon} onPress={()=>navigation.openDrawer()}/>
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    height:'100%',
    width:Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  headerText: {
    fontWeight:'bold',
    fontSize:19,
    color:'black',
    letterSpacing:1
  },
  icon: {
    position:'absolute',
    left:15
  },
  headerTitle: {
    flexDirection:'row'
  },
  headerImage:{
    width:26,
    height:26,
    marginHorizontal:10
  }
})