import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Gallery from "../screens/Gallery";
import Services from "../screens/Services";
import Profile from "../screens/Profile";
import History from "../screens/History";
import Support from "../screens/Support";
import Repair from "../screens/Repair";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "purple",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

// Main stack navigation
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      //  screenOptions={{ headerShown: false }}s
    >
      <Stack.Screen
        name="Home"
        component={Home}
        // hide header
        options={{ headerShown: false }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Repair" component={Repair} />
      
    </Stack.Navigator>
  );
};

// contact navigator
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

// gallery navigator
const GalleryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  );
};
// service navigator
const ServiceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Services" component={Services} />
    </Stack.Navigator>
  );
};

//ProfileStackNavigator
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profiles" component={Profile} />
    </Stack.Navigator>
  );
};

// History Navigation
const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Historys" component={History} />
    </Stack.Navigator>
  );
};

// support navigation
const SupportStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Supports" component={Support} />
    </Stack.Navigator>
  );
};

// Repair Navigation
const RepairStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Repair" component={Repair} />
    </Stack.Navigator>
  );
};

export {
  MainStackNavigator,
  ContactStackNavigator,
  GalleryStackNavigator,
  ServiceStackNavigator,
  ProfileStackNavigator,
  HistoryStackNavigator,
  SupportStackNavigator,
  RepairStackNavigator,
};
