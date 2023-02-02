//import liraries
import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  BackHandler,
} from "react-native";
import { categories } from "../data";
import CategoryBox from "../components/categoryBox";
import TopicBox from "../components/topicBox";
import { useFocusEffect } from "@react-navigation/native";
import { setSearch } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import LottieView from "lottie-react-native";

const EmptyContainer = (search) => {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require("../assets/lottie/emptySearch.json")}
        autoPlay
        style={{
          flex: 1,
          width: "100%",
          transform: [{ scale: 1 }],
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
        {`There's no topic starting with ${search} :/`}
      </Text>
    </View>
  );
};

// create a component
const Categories = ({ navigation }) => {
  const topics = useSelector((state) => state.topicListReducer);
  const searchText = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        dispatch(setSearch(""));
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [searchText])
  );

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
            String(e.toLowerCase().split("_")[0]).startsWith(
              searchText.toLowerCase()
            )
          )}
          ListEmptyComponent={EmptyContainer(searchText)}
          numColumns={2}
          renderItem={({ item }) => (
            <TopicBox topic={item} navigation={navigation} />
          )}
          keyExtractor={(topic) => topic}
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
