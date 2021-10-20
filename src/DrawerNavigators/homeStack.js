//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../StackNavigators/categories";
import Info from "../StackNavigators/info";
import Search from "../StackNavigators/search";
import Topics from "../StackNavigators/topics";
import Header from "../components/header";
import ModalError from "../components/modal";
import SplashScreen from "../components/splashScreen";

// create a component
const HomeStack = () => {
  const { Navigator, Screen, Group } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerLeft: null, headerBackVisible: false }}>
      <Group>
        <Screen
          options={{ headerShown: false }}
          name="Splash"
          component={SplashScreen}
        />
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
      </Group>
      <Group screenOptions={{ presentation: "modal" }}>
        <Screen
          options={{ headerShown: false }}
          name="Error"
          component={ModalError}
        />
      </Group>
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
