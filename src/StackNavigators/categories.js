//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { categories } from "../data";
import { en, ha, ig, yo } from "../localization";
import CategoryBox from "../components/categoryBox";

const Category = ({ item }) => {
  return <CategoryBox category={item.category} image={item.image} />;
};

// create a component
const Categories = () => {
  const language = useSelector((state) => state.languageReducer);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        data={categories}
        renderItem={Category}
        keyExtractor={({ category }) => category}
      />
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
  },
});

//make this component available to the app
export default Categories;
