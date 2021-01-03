import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTalines from './TopTalines';
import TopHeadlines from './TopHeadlines';
import Hashtags from './Hashtags'; 
import { createStackNavigator } from '@react-navigation/stack';

const ToptalinesStack = createStackNavigator();
  const ToptalinesStackScreen = ({navigation}) => (
    <ToptalinesStack.Navigator ScreenOptions={{}}>
      <ToptalinesStack.Screen name = "Toptalines" style= "center" component = {TopTalines} options ={{}}/>
      <ToptalinesStack.Screen name = "Topheadlines" style= "center" component = {TopHeadlines} options ={{}}/>
    </ToptalinesStack.Navigator>
  );
  const TopheadlinesStack = createStackNavigator();
  const TopheadlinesStackScreen = ({navigation}) => (
    <TopheadlinesStack.Navigator ScreenOptions={{}}>
      <TopheadlinesStack.Screen name = "Topheadlines" style= "center" component = {TopHeadlines} options ={{}}/>
    </TopheadlinesStack.Navigator>
  );
 const Tabs = createMaterialTopTabNavigator();

export default function HomeScreen() {
    return (
        <Tabs.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'white',
          labelStyle: { fontSize: 15 },
          style: { backgroundColor: '#333'},
        }}
       >
        <Tabs.Screen 
            name="TopHeadlines" 
            component={TopHeadlines}
            options={{tabBarLabel:'Top Headlines'}}
        />
        <Tabs.Screen 
            name="hashtags" 
            component={Hashtags}
            options={{tabBarLabel:'HASTAGS'}} 
        />

      </Tabs.Navigator>
    )
}

