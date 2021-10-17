//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Animals from "../assets/images/coverImages/Animals.jpg";
import Play from "../assets/icons/play.png";
import Minimize from "../assets/icons/minimize.png";
import Maximize from "../assets/icons/maximize.png";

// create a component
const Info = () => {
  const [playing, setPlaying] = useState(false);
  const [large, setLarge] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={Animals}
          // resizeMode={large ? "contain" : "cover"}
          style={[
            styles.hero,
            large && { height: 480, width: null, flex: 1 },
          ]}></Image>
        <View style={styles.buttonContainerWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => setPlaying(!playing)}>
            <>
              {!playing ? (
                <Image style={styles.button} source={Play} />
              ) : (
                <View style={styles.stop}></View>
              )}
            </>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.buttonContainer,
            {
              alignSelf: "flex-start",
              marginTop: -65,
              marginLeft: 8,
              width: 35,
              height: 35,
            },
          ]}>
          <TouchableOpacity onPress={() => setLarge(!large)}>
            <>
              {large ? (
                <Image style={[styles.button, { left: 0 }]} source={Minimize} />
              ) : (
                <Image style={[styles.button, { left: 0 }]} source={Maximize} />
              )}
            </>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sequi
          ipsa aliquam totam mollitia, temporibus perferendis est quis quibusdam
          cupiditate architecto a, unde dolore suscipit assumenda! Tempora fugit
          vero deleniti!
        </Text>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  buttonContainerWrapper: {
    width: "100%",
    alignItems: "flex-end",
    marginRight: 24,
  },
  hero: {
    height: 160,
    width: "100%",
    position: "relative",
  },
  buttonContainer: {
    width: 50,
    height: 50,
    marginTop: -25,
    backgroundColor: "#264653",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    zIndex: 2,
    borderWidth: 0.5,
    borderColor: "white",
    marginRight: 8,
  },
  button: {
    width: 20,
    height: 20,
    left: 2,
  },
  stop: {
    width: 20,
    height: 20,
    backgroundColor: "red",
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 14,
    lineHeight: 21,
    color: "#264653",
    paddingHorizontal: 16,
    marginTop: 32,
  },
});

//make this component available to the app
export default Info;
