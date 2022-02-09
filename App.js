import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainStackNavigator } from "./navigation/StackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
     <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
