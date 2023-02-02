import Animals from "./assets/images/coverImages/Animals.jpg";
import Art from "./assets/images/coverImages/Art.jpg";
import EthnicGroups from "./assets/images/coverImages/EthnicGroups.jpg";
import Festivals from "./assets/images/coverImages/Festivals.jpg";
import Food from "./assets/images/coverImages/Food.jpg";
import HistoricPeople from "./assets/images/coverImages/HistoricPeople.jpg";
import HistoricPlaces from "./assets/images/coverImages/HistoricPlaces.jpg";
import Games from "./assets/images/coverImages/IndigenousGames.jpg";
import NHistory from "./assets/images/coverImages/NigerianHistory.jpg";
import Religion from "./assets/images/coverImages/Religion.jpg";
import States from "./assets/images/coverImages/States.jpg";
import Culture from "./assets/images/coverImages/Culture.jpg";

import { Storage } from "./firebase";
import * as FileSystem from "expo-file-system";

class Topic {
  constructor(topic, category = "Animals") {
    this.topic = topic;
  }
}

async function getDownloadLink(data) {
  try {
    const url = await Storage.ref(data).getDownloadURL();
    return url;
  } catch (e) {
    return data;
  }
}

export async function ensureDirExists(directory) {
  const dirInfo = await FileSystem.getInfoAsync(directory);

  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(directory, {
      intermediates: true,
    });
  }

  return new Promise((resolve) => resolve(true));
}

export async function ensureFileExists(type, file, language, err) {
  if (type === "audio") {
    const fileInfo = await FileSystem.getInfoAsync(
      FileSystem.cacheDirectory + `9ja/audio/${language}_${file}.m4a`
    );

    if (fileInfo.exists) return fileInfo.uri;

    try {
      const url = await getDownloadLink(`audio/${language}_${file}.m4a`);
      const fileUri =
        FileSystem.cacheDirectory + `9ja/audio/${language}_${file}.m4a`;

      let downloadObject = FileSystem.createDownloadResumable(url, fileUri);

      let response = await downloadObject.downloadAsync();
      return response.uri;
    } catch (e) {
      console.log("unable to save audio:: " + e);
      return null;
    }
  } else if (type === "image") {
    //check if image exists locally
    const fileInfo = await FileSystem.getInfoAsync(
      FileSystem.cacheDirectory + `9ja/images/${file}.jpg`
    );

    //if file doesn't exist
    try {
      if (!fileInfo.exists) {
        let link;
        try {
          link = await getDownloadLink(`topicImages/${file}.jpg`);

          const fileUri = FileSystem.cacheDirectory + `9ja/images/${file}.jpg`;

          let downloadObject = FileSystem.createDownloadResumable(
            link,
            fileUri
          );

          let { uri } = await downloadObject.downloadAsync();
          return uri;
        } catch (e) {}
        return link;
      }
      // return local uri
      return fileInfo.uri;
    } catch (e) {
      //catch network error or file not existing
    }
  }
}

export const checkFolders = async () => {
  await ensureDirExists(FileSystem.cacheDirectory + `9ja/audio/`);
  await ensureDirExists(FileSystem.cacheDirectory + `9ja/images/`);
};

export const topics = [
  new Topic("Beetle_Animals"),
  new Topic("Elephant_Animals"),
  new Topic("Peacock_Animals"),
  new Topic("Bird_Animals"),
  new Topic("Ant_Animals"),
  new Topic("Antelope_Animals"),
  new Topic("Butterfly_Animals"),
  new Topic("Camel_Animals"),
  new Topic("Chameleon_Animals"),
  new Topic("Cat_Animals"),
  new Topic("Chicken_Animals"),
  new Topic("Ram_Animals"),
];

export const categories = [
  {
    category: "animals",
    image: require("./assets/images/coverImages/Animals.jpg"),
  },
  { category: "art", image: require("./assets/images/coverImages/Art.jpg") },
  {
    category: "culture",
    image: require("./assets/images/coverImages/Culture.jpg"),
  },
  {
    category: "ethnic groups",
    image: require("./assets/images/coverImages/EthnicGroups.jpg"),
  },
  {
    category: "festivals",
    image: require("./assets/images/coverImages/Festivals.jpg"),
  },
  { category: "food", image: require("./assets/images/coverImages/Food.jpg") },
  {
    category: "historic people",
    image: require("./assets/images/coverImages/HistoricPeople.jpg"),
  },
  {
    category: "historic places",
    image: require("./assets/images/coverImages/HistoricPlaces.jpg"),
  },
  {
    category: "indigenous games",
    image: require("./assets/images/coverImages/IndigenousGames.jpg"),
  },
  {
    category: "nigerian history",
    image: require("./assets/images/coverImages/NigerianHistory.jpg"),
  },
  {
    category: "religion",
    image: require("./assets/images/coverImages/Religion.jpg"),
  },
  {
    category: "states",
    image: require("./assets/images/coverImages/States.jpg"),
  },
];
