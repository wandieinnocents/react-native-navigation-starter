import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Contact = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      />

<Text>This is the gallery screen</Text>
      <Button
        title="Go to galery Screen"
        onPress={() => navigation.navigate("Gallery")} // We added an onPress event which would navigate to the About screen
      />

<Text>This is the gallery screen</Text>
      <Button
        title="Go to SERVICES Screen"
        onPress={() => navigation.navigate("Services")} // We added an onPress event which would navigate to the About screen
      />

    </View>

    
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;