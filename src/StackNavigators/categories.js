//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { categories, topics } from "../data";
import { en, ha, ig, yo } from "../localization";
import CategoryBox from "../components/categoryBox";
import TopicBox from "../components/topicBox";

// create a component
const Categories = ({ navigation }) => {
  const language = useSelector((state) => state.languageReducer);
  const searchText = useSelector((state) => state.searchReducer);

  return (
    <SafeAreaView style={styles.container}>
      {searchText === "" ? (
        <FlatList
          key={searchText + "0"}
          style={{ width: "100%" }}
          data={categories}
          // renderItem={Category}
          renderItem={({ item }) => (
            <CategoryBox
              category={item.category}
              image={item.image}
              navigation={navigation}
            />
          )}
          keyExtractor={({ category }) => category}
        />
      ) : (
        <FlatList
          style={{ width: "100%" }}
          key={searchText + "1"}
          data={topics.filter((e) =>
            String(e.topic.toLowerCase()).includes(
              searchText.toString().toLowerCase()
            )
          )}
          numColumns={2}
          renderItem={({ item }) => (
            <TopicBox topic={item.topic} navigation={navigation} />
          )}
          keyExtractor={({ topic }) => topic}
        />
      )}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    paddingLeft: 12,
    backgroundColor: "#e5e5e5",
  },
});

//make this component available to the app
export default Categories;
