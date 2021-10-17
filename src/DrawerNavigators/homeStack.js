//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../StackNavigators/categories";
import Info from "../StackNavigators/info";
import Search from "../StackNavigators/search";
import Topics from "../StackNavigators/topics";
import Header from "../components/header";

// create a component
const HomeStack = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        options={(headerProps) => ({
          headerTitle: (props) => (
            <Header {...headerProps} {...props} screen={1} />
          ),
        })}
        name="Categories"
        component={Categories}
      />
      <Screen
        options={(headerProps) => ({
          headerTitle: (props) => (
            <Header {...headerProps} {...props} screen={2} />
          ),
        })}
        name="Search"
        component={Search}
      />
      <Screen
        options={(headerProps) => ({
          headerTitle: (props) => (
            <Header {...headerProps} {...props} screen={3} />
          ),
        })}
        name="Topics"
        component={Topics}
      />
      <Screen
        options={(headerProps) => ({
          headerTitle: (props) => (
            <Header {...headerProps} {...props} screen={4} />
          ),
        })}
        name="Info"
        component={Info}
      />
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
