//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { checkFolders } from "../data";
import { Db } from "../firebase";
import _ from "lodash";
import { setTopicList, setCategoryList, setData } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Bubble from "./bubble";

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
      <Bubble length={120} />
      <Bubble length={20} neg />
      <Bubble length={80} />

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
});

//make this component available to the app
export default SplashScreen;
