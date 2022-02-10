import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Repair = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Repair screen</Text>
      
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

export default Repair;