import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  MainTabScreen from './src/pages/MainTabScreen';
import DetailsScreen from './src/pages/DetailsScreen';
import MessageScreen from './src/pages/MessageScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  console.log('projeçalışıyor');
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="MenuTab" component={MainTabScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
        <Drawer.Screen name="Messsage" component={MessageScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}