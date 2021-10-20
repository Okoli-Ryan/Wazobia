//import liraries
import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import TopicBox from "../components/topicBox";
import { useSelector, useDispatch } from "react-redux";
import { topics } from "../data";

// create a component
const Search = ({ navigation }) => {
  const text = useSelector((state) => state.searchReducer);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={topics.filter((e) => {
          e.topic.toLowerCase().includes(text.toLowerCase());
        })}
        numColumns={2}
        renderItem={({ item }) => (
          <TopicBox topic={item.topic} navigation={navigation} />
        )}
        keyExtractor={({ topic }) => topic}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});

//make this component available to the app
export default Search;
