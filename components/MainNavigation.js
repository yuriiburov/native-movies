import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Details from '../screens/Details';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Navbar from './Navbar';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          header: ({ navigation }) => (
            <Navbar navigation={navigation} main={true} />
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTransparent: true,
          header: ({ navigation }) => (
            <Navbar navigation={navigation} main={false} />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTransparent: true,
          header: ({ navigation }) => (
            <Navbar navigation={navigation} main={false} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
