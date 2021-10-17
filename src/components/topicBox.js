//import liraries
import React, { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Default from "../assets/images/default.png";
import { ensureFileExists } from "../data";

// create a component
const TopicBox = ({ topic, navigation }) => {
  const [image, setImage] = useState({
    loading: true,
    image: Default,
  });

  useEffect(() => {
    (async () => {
      try {
        let a = await ensureFileExists("image", topic);
        setImage((prev) => {
          return { ...prev, loading: false, image: { uri: a } };
        });
      } catch (e) {}
    })();
  }, []);

  const onError = (e) => {
    console.log(e);
    setImage((prev) => {
      return { ...prev, loading: false, image: Default };
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Info")}>
      <Image onError={onError} source={image.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.text}>
          {topic}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 172,
    width: "50%",
    padding: 8,
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: "#f7f7f7",
    height: "30%",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    height: "70%",
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#264653",
    paddingTop: 4,
    paddingLeft: 4,
    lineHeight: 21,
  },
});

//make this component available to the app
export default React.memo(TopicBox);
