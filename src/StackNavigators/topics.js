//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import TopicBox from "../components/topicBox";
import { useSelector } from "react-redux";

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
