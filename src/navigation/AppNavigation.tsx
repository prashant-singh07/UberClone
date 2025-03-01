import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ActivityScreen,
  HomeScreen,
  OnBoardingScreen,
  ProfileScreen,
  ServiceScreen,
  SignInScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ServiceScreen" component={ServiceScreen} />
      <Tab.Screen name="ActivityScreen" component={ActivityScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoardingScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
