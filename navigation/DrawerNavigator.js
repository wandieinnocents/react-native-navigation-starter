import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator,ServiceStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    // customize drawer
    screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="HomeUI" component={TabNavigator} />
      <Drawer.Screen name="ContactUI" component={ContactStackNavigator} />
      <Drawer.Screen name="ServicesUI" component={ServiceStackNavigator} />
      <Drawer.Screen name="ProfileUI" component={ServiceStackNavigator} />
      <Drawer.Screen name="HistoryUI" component={ServiceStackNavigator} />
      <Drawer.Screen name="SuportUI" component={ServiceStackNavigator} />
      
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;