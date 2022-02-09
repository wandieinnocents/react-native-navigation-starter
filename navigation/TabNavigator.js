import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator , GalleryStackNavigator, ServiceStackNavigator} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: [{ display: 'flex' }],
      tabBarShowLabel: true,
      tabBarLabelStyle: {
        paddingBottom: 6,
        color: '#333',
      },
    //   Hide header of tab bar
      headerShown: false, 
    }}
    >
      <Tab.Screen name="HomePage" component={MainStackNavigator} />
      <Tab.Screen name="ContactPage" component={ContactStackNavigator} />
      <Tab.Screen name="ServicesPage" component={ServiceStackNavigator} />
      
      <Tab.Screen name="GallerPAGE" component={GalleryStackNavigator} />


    </Tab.Navigator>
  );
};

export default BottomTabNavigator;