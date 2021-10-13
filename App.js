//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/DrawerNavigators/homeStack";
import About from "./src/DrawerNavigators/about";
import Bookmarks from "./src/DrawerNavigators/bookmarks";
import { Provider } from "react-redux";
import store from "./src/store";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from "expo-font";

// create a component
const App = () => {
  const { Navigator, Screen } = createDrawerNavigator();

  const [fontsLoaded] = useFonts({
    Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
    Poppins_medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <Navigator
              screenOptions={{
                orientation: "portrait",
                headerShown: false,
              }}>
              <Screen name="Home" component={Home} />
              <Screen name="Bookmarks" component={Bookmarks} />
              <Screen name="About" component={About} />
            </Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    );
  }
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
export default App;
