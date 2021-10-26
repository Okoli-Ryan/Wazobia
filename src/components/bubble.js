//import liraries
import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
} from "react-native";

// create a component
const Bubble = ({ length, neg }) => {
  const move = useRef(
    new Animated.ValueXY({
      x: Math.floor(Math.random() * Dimensions.get("window").width) / 3,
      y: Math.floor(Math.random() * Dimensions.get("window").height) / 3,
    })
  ).current;

  Animated.timing(move, {
    toValue: {
      x: neg
        ? Math.floor(Math.random() * Dimensions.get("window").width + 1)
        : -Math.floor(Math.random() * Dimensions.get("window").width + 1),
      y: neg
        ? Math.floor(Math.random() * Dimensions.get("window").height + 1)
        : Math.floor(Math.random() * Dimensions.get("window").height + 1),
    },
    duration: 50000,
    useNativeDriver: true,
    easing: Easing.linear,
  }).start();

  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          width: length,
          height: length,
          borderRadius: length / 2,

          transform: move.getTranslateTransform(),
        },
      ]}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  bubble: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    zIndex: 2,
    position: "absolute",
  },
});

//make this component available to the app
export default Bubble;
