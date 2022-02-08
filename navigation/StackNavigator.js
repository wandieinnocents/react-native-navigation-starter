import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Services from "../screens/Services";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#9AC4F8",
            },
            headerTintColor: "white",
            headerBackTitle: "Back",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Services" component={Services} />
        </Stack.Navigator>
      );
}

export { MainStackNavigator };