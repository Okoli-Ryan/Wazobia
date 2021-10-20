//import liraries
import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import { dismissModal } from "../store/actions";

// create a component
const ModalError = ({ navigation, route }) => {
  //   const modal = useSelector((state) => state.modalReducer);

  //   const dismissModalFunc = () => {
  //     modal.callback();
  //     dispatch(dismissModal());
  //   };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.message}>{route.params.message}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => route.params.callback()}>
          <Text style={styles.buttonText}>{route.params.callbackMessage}</Text>
        </TouchableOpacity>
        {!!route.params.callback2 && !!route.params.callbackMessage2 && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => route.params.callback2()}>
            <Text style={styles.buttonText}>
              {route.params.callbackMessage2}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  message: {
    fontFamily: "Poppins_medium",
    paddingVertical: 12,
    paddingHorizontal: 8,
    textAlign: "center",
    color: "#264653",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    elevation: 5,
  },
  button: {
    backgroundColor: "#264653",
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins",
    paddingVertical: 16,
  },
});

//make this component available to the app
export default ModalError;
