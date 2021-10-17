//import liraries
import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import BackArrow from "../assets/icons/back-arrow.png";
import Menu from "../assets/icons/menu.png";
import { DrawerActions } from "@react-navigation/native";

// import { useDispatch } from "react-redux";
// import { setData } from "../store/actions";

// create a component
const HeaderLeft = ({ navigation }) => {
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Image style={styles.image} source={Menu} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goBack}>
        <Image style={styles.image} source={BackArrow} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 60,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#f9f8f8",
    marginLeft: -16,
  },
  image: {
    width: 20,
    height: 20,
    // marginLeft: 20,
  },
});

//make this component available to the app
export default HeaderLeft;
