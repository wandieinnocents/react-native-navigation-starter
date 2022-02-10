import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator, 
  ServiceStackNavigator ,
  ProfileStackNavigator,
  HistoryStackNavigator,
  SupportStackNavigator

} from "./StackNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // customize drawer
      screenOptions={{ headerShown: false }}
     
      options={{
          title: "HomeUI",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="purple" size={26} />
          ),}}
    >
      <Drawer.Screen
        name="HomeUI"
        component={TabNavigator}
        // icon
        options={{
          title: "HomeUI",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="purple" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="ContactUI"
        component={ContactStackNavigator}
        // icon
        options={{
          title: "ContactUI",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="phone" color="purple" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="ServicesUI"
        component={ServiceStackNavigator}
        // icon
        options={{
          title: "ServicesUI",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color="purple" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="ProfileUI"
        component={ProfileStackNavigator}
        // icon
        options={{
          title: "ProfileUI",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color="purple" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="HistoryUI"
        component={HistoryStackNavigator}
        // icon
        options={{
          title: "HistoryUI",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color="purple" size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="SuportUI"
        component={SupportStackNavigator}
        // icon
        options={{
          title: "SuportUI",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color="purple" size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
