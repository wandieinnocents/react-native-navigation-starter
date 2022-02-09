import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MainStackNavigator,
  ContactStackNavigator,
  GalleryStackNavigator,
  ServiceStackNavigator,
} from "./StackNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (

    <Tab.Navigator 
    screenOptions={{ headerShown: false  }}
    labeled={false} 
    barStyle={{ backgroundColor: 'black' }} 
    
    activeColor="white" >
    {/* Screens */}
      <Tab.Screen
        name="HomePage"
        component={MainStackNavigator} //Home Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="ContactPage"
        component={ContactStackNavigator} // Search Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="ServicesPage"
        component={ServiceStackNavigator}
        // Notification Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="GallerPAGE"
        component={GalleryStackNavigator} // Profile Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
