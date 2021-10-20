//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

// create a component
const Drawer = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#264653",
  },
});

//make this component available to the app
export default Drawer;
