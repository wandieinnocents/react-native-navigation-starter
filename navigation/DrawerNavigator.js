import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    // customize drawer
    
    >
      <Drawer.Screen name="HomeUI" component={TabNavigator} />
      <Drawer.Screen name="ContactUI" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;