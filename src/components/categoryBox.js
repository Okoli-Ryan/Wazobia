//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { setCategory } from "../store/actions";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { LinearGradient } from "expo-linear-gradient";

// create a component
const CategoryBox = ({ category, image, navigation }) => {
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setCategory(category));
    navigation.navigate("Topics");
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        style={styles.container}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={["#264653", "#000"]}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.text}>
            {_.startCase(category)}
          </Text>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    marginBottom: 8,
    position: "relative",
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "40%",
    height: "100%",
    elevation: 5,
    padding: 8,
  },
  textContainer: {
    width: "60%",
    height: "100%",
    paddingLeft: 16,
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins_medium",
    fontSize: 16,
    color: "white",
  },
});

//make this component available to the app
export default CategoryBox;
