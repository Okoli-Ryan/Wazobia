//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import TopicBox from "../components/topicBox";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

// create a component
const Topics = ({ navigation }) => {
  const topics = useSelector((state) => state.topicListReducer);
  const category = useSelector((state) => state.categoryReducer);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={topics.filter(
          (topic) =>
            topic.split("_")[1].toLowerCase() === category.toLowerCase()
        )}
        numColumns={2}
        renderItem={({ item }) => (
          <TopicBox topic={item} navigation={navigation} />
        )}
        keyExtractor={(topic) => topic}
        ListEmptyComponent={() => (
          <View style={{ flex: 1 }}>
            <LottieView
              source={require("../assets/lottie/emptyBox.json")}
              autoPlay
              style={{
                flex: 1,
                width: "100%",
                transform: [{ scale: 1.2 }],
              }}
              loop
            />
            <Text
              style={{
                textAlign: "center",
                color: "#264653",
                fontFamily: "Poppins_medium",
                marginTop: 16,
                fontSize: 20,
              }}>
              Coming soon :)
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5",
    paddingLeft: 4,
  },
});

//make this component available to the app
export default Topics;
