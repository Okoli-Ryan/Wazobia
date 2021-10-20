//import liraries
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Play from "../assets/icons/play.png";
import Default from "../assets/images/default.png";
import Minimize from "../assets/icons/minimize.png";
import Maximize from "../assets/icons/maximize.png";
import { useSelector } from "react-redux";
import { Audio } from "expo-av";
import { ensureFileExists } from "../data";
import NetInfo from "@react-native-community/netinfo";
import _ from "lodash";

// create a component
const Info = ({ navigation }) => {
  const sound = useRef(null);
  const [retry, setRetry] = useState(0);
  const [image, setImage] = useState({ image: Default });
  const [playing, setPlaying] = useState(false);
  // const [sound, setSound] = useState(new Audio.Sound());
  const [ready, setReady] = useState(false);
  const [large, setLarge] = useState(false);
  const topic = useSelector((state) => state.topicReducer);
  const language = useSelector((state) => state.languageReducer);
  const data = useSelector((state) => state.dataReducer);
  const topicText = topic.split("_")[0];
  const categoryText = topic.split("_")[1];

  const textPlaceholder = () => {
    try {
      return data[`${categoryText.toLowerCase()}`][
        `${topicText.toLowerCase()}`
      ][`${language}`];
      // if (e === undefined) return "Still in Progress";
    } catch (e) {
      return ":Still in progress...";
    }
  };

  let text = textPlaceholder();

  const onPress = async () => {
    if (playing) {
      await sound.current.pauseAsync();
      setPlaying(false);
    } else {
      await sound.current.replayAsync();
      setPlaying(true);
    }
  };
  //!test the info page

  useEffect(() => {
    (async () => {
      try {
        let a = await ensureFileExists(
          "image",
          _.startCase(topic.split("_")[0])
        );
        setImage((prev) => {
          return { ...prev, image: { uri: a } };
        });
      } catch (e) {}
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setPlaying(false);
      setReady(false);
      sound.current = null;
      try {
        let soundLink = await ensureFileExists(
          "audio",
          topic.toLowerCase().split("_")[0],
          language
        );
        sound.current = new Audio.Sound();
        await sound.current.loadAsync({
          uri: soundLink,
        });
        setReady(true);
        // await sound.playAsync();
        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
      } catch (error) {
        // An error occurred!
        setReady(false);

        const isConnected = NetInfo.fetch().then((state) => {
          return state.isConnected;
        });
        navigation.navigate("Error", {
          callbackMessage: isConnected ? "Ok" : "Try Again",
          callback: () => {
            isConnected
              ? (() => {
                  navigation.goBack();
                })()
              : (() => {
                  navigation.goBack();
                  setRetry((prev) => prev + 1);
                })();
          },
          message: isConnected
            ? "Audio file does not exist at the moment"
            : "Network Error",
        });
      }
    })();
  }, [language, retry]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <Image
          source={image.image}
          // resizeMode={large ? "contain" : "cover"}
          style={[
            styles.hero,
            large && { height: 480, width: null, flex: 1 },
          ]}></Image>
        <View style={styles.buttonContainerWrapper}>
          {ready ? (
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
              <>
                {!playing ? (
                  <Image style={styles.button} source={Play} />
                ) : (
                  <View style={styles.stop}></View>
                )}
              </>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonContainer}>
              <ActivityIndicator size="small" color="white" />
            </View>
          )}
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
        <View style={{ marginTop: 32 }}>
          {language !== "English" && (
            <Text style={styles.translate}>
              {text.toString().split(":")[0].trim()}
            </Text>
          )}
          <Text style={styles.text}>
            {text.toString().split(":")[1].trim()}
          </Text>
        </View>
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
    height: 200,
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
    marginTop: 16,
  },
  translate: {
    fontFamily: "Poppins",
    fontSize: 16,
    paddingHorizontal: 16,
    lineHeight: 21,
  },
});

//make this component available to the app
export default Info;
