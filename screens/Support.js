import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Support = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Support screen</Text>
      <Button
        title="Go to Service Screen"
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

export default Support;