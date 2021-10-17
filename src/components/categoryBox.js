//import liraries
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// create a component
const CategoryBox = ({ category, image, navigation }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{category}</Text>
        </View>

        <Image source={image} style={styles.image} />
      </>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 160,
    width: "100%",
    marginVertical: 16,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -2,
  },
  textContainer: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  text: {
    fontFamily: "Poppins_medium",
    fontSize: 16,
    color: "white",
    position: "absolute",
  },
});

//make this component available to the app
export default CategoryBox;
