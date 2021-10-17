//import liraries
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

// create a component
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.bubble,
          {
            width: 30,
            height: 30,
            borderRadius: 15,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 60,
            height: 60,
            borderRadius: 30,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 100,
            height: 100,
            borderRadius: 50,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 80,
            height: 80,
            borderRadius: 40,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 20,
            height: 20,
            borderRadius: 10,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 150,
            height: 150,
            borderRadius: 75,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <Text style={{ fontSize: 24, color: "white" }}>Wázobia</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#264653",
  },
  bubble: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    zIndex: 2,
    position: "absolute",
  },
});

//make this component available to the app
export default SplashScreen;
