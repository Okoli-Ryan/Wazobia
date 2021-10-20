import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import { Asset } from "expo-asset";

//delete this
import { Storage } from "./firebase";
import * as FileSystem from "expo-file-system";

export default function App() {
  useEffect(() => {
    async function ensureDirExists(directory) {
      const dirInfo = await FileSystem.getInfoAsync(directory);

      if (!dirInfo.exists) {
        console.log("dir doesnt exist");
        await FileSystem.makeDirectoryAsync(directory, {
          intermediates: true,
        });
      } else {
        console.log("directory exists");
        console.log(dirInfo);
      }

      return new Promise((resolve) => resolve(true));
    }

    (async () => {
      try {
        const url = await Storage.ref(
          "audio/English_festivals_ogun festival.m4a"
        ).getDownloadURL();
        console.log(url);

        //download
        //create folder
        await ensureDirExists(FileSystem.documentDirectory + "9ja/");

        //save to folder
        const fileUri = FileSystem.documentDirectory + "9ja/ogun festival.m4a";

        let downloadObject = FileSystem.createDownloadResumable(url, fileUri);

        let response = await downloadObject.downloadAsync();

        console.log("file downloaded to " + fileUri);

        const sound = new Audio.Sound();
        try {
          const status = await sound.loadAsync(
            { uri: FileSystem.documentDirectory + "9ja/ogun festival.m4a" },
            { shouldPlay: true }
          );
          console.log(status);
          // await sound.playAsync();
          // Your sound is playing!
          console.log("playing");

          // Don't forget to unload the sound from memory
          // when you are done using the Sound object
        } catch (error) {
          // An error occurred!
          console.log("error playing sound:: " + error);
        }

        // }
      } catch (e) {
        console.log("error::" + e);
      }
    })();
  }, []);

  return (
    //remember i18n package and setting up redux first
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
