//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { checkFolders } from "../data";
import { Db } from "../firebase";
import _ from "lodash";
import { setTopicList, setCategoryList, setData } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

// create a component
const SplashScreen = ({ navigation }) => {
  const [retry, setRetry] = useState(0);
  const persistedData = useSelector((state) => state.dataReducer);
  const persistedTopic = useSelector((state) => state.topicListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      checkFolders();

      const data = async () => {
        let a = await Db.collection("data").doc("documents").get();
        return a;
      };

      const topicData = async () => {
        let a = await Db.collection("data").doc("topics").get();
        return a;
      };

      try {
        const [dataDb, topicDb] = await Promise.all([data(), topicData()]);

        let mainData = dataDb.data();
        let categories = [];
        // console.log(doc.data());
        for (let category in mainData) {
          categories.push(category);
        }

        dispatch(setData(mainData));
        dispatch(setCategoryList(categories));
        dispatch(setTopicList(topicDb.data().topics));
        navigation.navigate("Categories");
      } catch (e) {
        if (persistedData.length === 0 && persistedTopic.length === 0) {
          navigation.navigate("Error", {
            callback: () => {
              console.log("error getting data " + e);
              navigation.goBack();
              setRetry((prev) => prev + 1);
            },
            message: "Network Error",
            callbackMessage: "Try Again",
          });
        } else {
          navigation.navigate("Categories");
        }
      }
    })();
  }, [retry]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.bubble,
          {
            width: 30,
            height: 30,
            borderRadius: 15,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 60,
            height: 60,
            borderRadius: 30,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 100,
            height: 100,
            borderRadius: 50,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 80,
            height: 80,
            borderRadius: 40,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 20,
            height: 20,
            borderRadius: 10,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <View
        style={[
          styles.bubble,
          {
            width: 150,
            height: 150,
            borderRadius: 75,
            top: Math.floor(
              Math.random() * Dimensions.get("window").height + 1
            ),
            left: Math.floor(
              Math.random() * Dimensions.get("window").width + 1
            ),
          },
        ]}
      />
      <Text
        style={{ fontSize: 24, color: "white", fontFamily: "Poppins_medium" }}>
        Wázobia
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#264653",
  },
  bubble: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    zIndex: 2,
    position: "absolute",
  },
});

//make this component available to the app
export default SplashScreen;
