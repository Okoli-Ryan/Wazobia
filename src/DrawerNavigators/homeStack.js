//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../StackNavigators/categories";
import Info from "../StackNavigators/info";
import Search from "../StackNavigators/search";
import Topics from "../StackNavigators/topics";

// create a component
const HomeStack = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Categories" component={Categories} />
      <Screen name="Info" component={Info} />
      <Screen name="Topics" component={Topics} />
      <Screen name="Search" component={Search} />
    </Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default HomeStack;
