//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { setLanguage } from "../store/actions";
import Cancel from "../assets/icons/close.png";
import Down from "../assets/icons/down-arrow.png";
import Menu from "../assets/icons/menu.png";
import Back from "../assets/icons/back-arrow.png";
import Glass from "../assets/icons/search.png";
import Bookmark from "../assets/icons/bookmark.png";
import BookmarkDone from "../assets/icons/bookmark-done.png";
import { DrawerActions } from "@react-navigation/native";
import { setSearch, setBookmark } from "../store/actions";

// create a component

const languageArray = [
  {
    key: 0,
    label: "English",
  },
  { key: 1, label: "Hausa" },
  { key: 2, label: "Igbo" },
  { key: 3, label: "Yoruba" },
];

const Box = ({ onPress, label }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const CancelButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        backgroundColor: "#264653",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 12,
        padding: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <Text
        style={{
          fontFamily: "Poppins_medium",
          fontSize: 16,
          marginRight: 8,
          color: "white",
        }}>
        Cancel
      </Text>
      <Image
        source={Cancel}
        style={{ width: 10, height: 10, alignSelf: "center", top: -1 }}
      />
    </TouchableOpacity>
  );
};

const CategoryHeader = ({ dispatch }) => {
  const searchedText = useSelector((state) => state.searchReducer);

  return (
    <View
      style={{
        position: "relative",
        width: "100%",
        marginTop: 24,
        marginBottom: 4,
        paddingRight: 14,
      }}>
      <View
        style={{
          backgroundColor: "#e8e5e5",
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
        }}>
        <Image
          source={Glass}
          style={{
            width: 16,
            height: 16,
            position: "absolute",
            left: 12,
            zIndex: 2,
            top: 14,
          }}
        />
        <TextInput
          placeholder="What are you looking for?"
          value={searchedText}
          onChangeText={(e) => dispatch(setSearch(e))}
          style={{
            fontFamily: "Poppins",
            width: "100%",
            paddingVertical: 8,
            paddingLeft: 40,
            top: 2,
            fontSize: 13,
            paddingRight: 8,
            // backgroundColor: "transparent",
            color: "#264653",
          }}
        />
      </View>
    </View>
  );
};

const InfoHeader = ({ goBack, dispatch }) => {
  const topic = useSelector((state) => state.topicReducer);
  const bookmarkList = useSelector((state) => state.bookmarkReducer);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "85%",
          alignItems: "center",
        }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Back} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <Text
          numberOfLines={1}
          style={{
            fontFamily: "Poppins_medium",
            color: "#264653",
            fontSize: 16,
            marginLeft: 16,
            top: 1,
          }}>
          {topic.split("_")[0]}
        </Text>
      </View>
      <View
        style={{
          width: "15%",
          flexDirection: "row",
          alignItems: "center",

          justifyContent: "flex-end",
        }}>
        <TouchableOpacity
          style={{ paddingLeft: 5, paddingRight: 10 }}
          onPress={() => {
            dispatch(setBookmark(topic));
          }}>
          <Image
            source={bookmarkList.includes(topic) ? BookmarkDone : Bookmark}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TopicHeader = ({ goBack }) => {
  const category = useSelector((state) => state.categoryReducer);

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          marginTop: 24,
        }}>
        <TouchableOpacity onPress={goBack}>
          <Image source={Back} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Poppins_medium",
            color: "#264653",
            fontSize: 16,
            marginLeft: 16,
            top: 1,
          }}>
          {_.startCase(category)}
        </Text>
      </View>
    </View>
  );
};

const SubHeader = (screen, dispatch, goBack) => {
  if (screen === 1) return <CategoryHeader dispatch={dispatch} />;
  else if (screen === 3) return <TopicHeader goBack={goBack} />;
  else if (screen === 4)
    return <InfoHeader goBack={goBack} dispatch={dispatch} />;
  else return null;
};

const Header = ({ screen, navigation }) => {
  const language = useSelector((state) => state.languageReducer);
  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();
  };
  const [modalVisible, setModalVisible] = useState(false);
  const onSelect = (option) => {
    if (option.label.toLowerCase() !== language.toLowerCase())
      dispatch(setLanguage(option.label));
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FlatList
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                }}
                data={languageArray}
                renderItem={({ item }) => (
                  <Box onPress={() => onSelect(item)} label={item.label} />
                )}
                ListHeaderComponent={() => (
                  <CancelButton onPress={() => setModalVisible(false)} />
                )}
                ListHeaderComponentStyle={{
                  backgroundColor: "transparent",
                }}
                keyExtractor={({ label }) => label}
              />
            </View>
          </View>
        </Modal>

        <View style={{ justifyContent: "space-between", paddingVertical: 8 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}>
              <Image style={{ width: 20, height: 20 }} source={Menu} />
            </TouchableOpacity>
            <View style={styles.group}>
              <Text style={styles.staticLanguage}>Language:</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.pickerBox}>
                <View style={styles.circle} />
                <Text style={styles.pickerLabel}>
                  {language.substring(0, 3).toUpperCase()}
                </Text>
                <Image
                  source={Down}
                  resizeMode="contain"
                  style={{
                    width: 8,
                    height: 8,
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {SubHeader(screen, dispatch, goBack)}
        </View>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
  },
  button: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#264653",
    backgroundColor: "white",
  },
  label: {
    padding: 12,
    fontFamily: "Poppins",
    fontSize: 14,
    paddingLeft: 8,
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5,
  },
  container: {
    minHeight: 110,
    flex: 1,
    backgroundColor: "#f9f8f8",
    width: "100%",
    marginRight: 18,
  },
  topic: {
    position: "absolute",
    fontFamily: "Poppins_medium",
    fontSize: 18,
    textAlign: "center",
    bottom: 3,
    marginLeft: Dimensions.get("window").width / 4,
    // right: 0,
    // marginLeft: -16,
    color: "#264653",
  },
  group: {
    alignSelf: "flex-end",
    marginTop: 8,
    marginRight: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerBox: {
    borderWidth: 2,
    borderColor: "#264653",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  pickerLabel: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#264653",
    marginHorizontal: 4,
    marginRight: 8,
  },
  staticLanguage: {
    color: "#264653",
    marginRight: 10,
    fontFamily: "Poppins",
    fontSize: 12,
    flexDirection: "row",
    alignSelf: "center",
  },
  lang: {
    color: "#264653",
    fontFamily: "Poppins",
    fontSize: 14,
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: "#e9c46a",
    borderRadius: 2.5,
    marginRight: 6,
    flexDirection: "row",
    alignSelf: "center",
  },
});

//make this component available to the app
export default Header;
