import Animals from "./assets/images/coverImages/Animals.png";
import EthnicGroups from "./assets/images/coverImages/EthnicGroups.png";
import Festivals from "./assets/images/coverImages/Festivals.png";
import Food from "./assets/images/coverImages/Food.png";
import History from "./assets/images/coverImages/History.png";
import Games from "./assets/images/coverImages/IndigenousGames.png";
import States from "./assets/images/coverImages/States.png";
import Government from "./assets/images/coverImages/Government.png";
import Culture from "./assets/images/coverImages/Culture.png";


import { Storage } from "./firebase";
import * as FileSystem from "expo-file-system";
import _ from "lodash";

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
    console.log("file " + file);
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
          console.log("downloaded " + uri);
          return uri;
        } catch (e) {}
        return link;
      }
      // return local uri
      console.log("local " + fileInfo.uri);
      return fileInfo.uri;
    } catch (e) {
      //catch network error or file not existing
      console.log(e);
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
    image: Animals,
  },
  {
    category: "culture",
    image: Culture,
  },
  {
    category: "ethnic groups",
    image: EthnicGroups,
  },
  {
    category: "festivals",
    image: Festivals,
  },
  { category: "food", image: Food },
  {
    category: "history",
    image: History,
  },

  {
    category: "indigenous games",
    image: Games,
  },
  {
    category: "states",
    image: States,
  },
  { category: "government", image: Government },
];
