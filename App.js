//import liraries
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/DrawerNavigators/homeStack";
import About from "./src/DrawerNavigators/about";
import Bookmarks from "./src/DrawerNavigators/bookmarks";
import SplashScreen from "./src/components/splashScreen";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Drawer from "./src/components/drawer";
import { checkFolders } from "./src/data";

import { useFonts } from "expo-font";

// create a component
const App = () => {
  const { Navigator, Screen } = createDrawerNavigator();

  const [fontsLoaded] = useFonts({
    Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
    Poppins_medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    checkFolders();
  }, []);

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <Navigator
                drawerContent={(props) => <Drawer {...props} />}
                screenOptions={{
                  orientation: "portrait",
                  headerShown: false,
                  drawerLabelStyle: { fontFamily: "Poppins", color: "white" },
                  drawerActiveBackgroundColor: "#264653",
                }}>
                <Screen name="Home" component={Home} />
                <Screen name="Bookmarks" component={Bookmarks} />
                <Screen name="About" component={About} />
              </Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
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
