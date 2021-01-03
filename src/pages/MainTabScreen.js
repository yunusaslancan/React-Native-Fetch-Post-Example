import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import DetailsScreen from './DetailsScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import TopTalines from './TopTalines';
import TopHeadlines from './TopHeadlines';

const HomeStack = createStackNavigator();

const HomeStackScreen =({navigation}) => (
    <HomeStack.Navigator ScreenOptions={{
      
    }}>
      <HomeStack.Screen name = "Home" style= "center" component = {HomeScreen} options ={{
        title:'JOURNAL',
        headerStyle:{
          backgroundColor:'#333'
        },
        
        headerTitleAlign:'center',
        headerTintColor: '#fcfaff',
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
        headerLeft:() =>(
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor= "#333" onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
         }}/>
    </HomeStack.Navigator>
  );

  const ProfileStack = createStackNavigator();

  const ProfileStackScreen =({navigation}) => (
    <ProfileStack.Navigator ScreenOptions={{
      
    }}>
      <ProfileStack.Screen name = "Profile" style= "center" component = {ProfileScreen} options ={{
        title:'Profile',
        headerStyle:{
          backgroundColor:'#333'
        },
        headerTitleAlign:'center',
        headerTintColor: '#fcfaff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         }}/>
         
    </ProfileStack.Navigator>
  );
  
  const DetailsStack = createStackNavigator();

  const DetailsStackScreen =({navigation}) => (
    <DetailsStack.Navigator ScreenOptions={{
      
    }}>
      <DetailsStack.Screen name = "Details" style= "center" component = {DetailsScreen} options ={{
        title:'Details',
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#333'
        },
      
        headerTintColor: '#fcfaff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         }}/>
    </DetailsStack.Navigator>
  );

  const MessageStack = createStackNavigator();  

  const MessageStackScreen =({navigation}) => (
    <MessageStack.Navigator ScreenOptions={{
      
    }}>
      <MessageStack.Screen name = "Message" style= "center" component = {MessageScreen} options ={{
        title:'Message',
        headerStyle:{
          backgroundColor:'#333'
        },
        headerTitleAlign:'center',
        headerTintColor: '#fcfaff',
        headerTitleAlign:"center",
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         }}
        />
    </MessageStack.Navigator>
  );



const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>(
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fcfaff"
    inactiveColor="#fcfaff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      
      options={{
        tabBarColor:'#333',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarColor:'#333',
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarColor:'#333',
        tabBarLabel: 'Journal',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="google-earth" color={color} size={26} />
        ),
      }}
    />
     
      <Tab.Screen
      name="Message"
      component={MessageStackScreen}
      options={{
        tabBarColor:'#333',
        tabBarLabel: 'Message',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="message" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

