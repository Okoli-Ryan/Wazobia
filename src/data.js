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
    console.log("error getting link:: " + e);
    return data;
  }
}

export async function ensureDirExists(directory) {
  const dirInfo = await FileSystem.getInfoAsync(directory);

  if (!dirInfo.exists) {
    console.log("dir doesnt exist");
    await FileSystem.makeDirectoryAsync(directory, {
      intermediates: true,
    });
  } else {
    console.log("directory exists");
  }

  return new Promise((resolve) => resolve(true));
}

export async function ensureFileExists(type, file, category = "Animals") {
  if (type === "audio") {
    try {
      const url = getDownloadLink(`audio/${file}.m4a`);
      const fileUri = FileSystem.cacheDirectory + `9ja/audio/${file}.m4a`;

      let downloadObject = FileSystem.createDownloadResumable(url, fileUri);

      let response = await downloadObject.downloadAsync();
      console.log(response);
    } catch (e) {
      console.log("unable to save audio:: " + e);
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

          downloadObject.downloadAsync();

          console.log("got from link");
        } catch (e) {
          console.log("error saving image:: " + e);
        }
        return link;
      }
      console.log("got from storage");
      // return local uri
      return fileInfo.uri;
    } catch (e) {
      //catch network error or file not existing
      console.log("error getting image:: " + e);
    }
  }
}

export const checkFolders = async () => {
  await ensureDirExists(FileSystem.cacheDirectory + `9ja/audio/`);
  await ensureDirExists(FileSystem.cacheDirectory + `9ja/images/`);
};

export const topics = [
  new Topic("Beetle"),
  new Topic("Peacock"),
  new Topic("Bird"),
  new Topic("Ant"),
  new Topic("Antelope"),
  new Topic("Butterfly"),
  new Topic("Camel"),
  new Topic("Chameleon"),
  new Topic("Cat"),
  new Topic("Chicken"),
  new Topic("Ram"),
];

export const categories = [
  {
    category: "Animals",
    image: Animals,
  },
  { category: "Art", image: Art },
  {
    category: "Ethnic Groups",
    image: EthnicGroups,
  },
  {
    category: "Festivals",
    image: Festivals,
  },
  { category: "Food", image: Food },
  {
    category: "Historic People",
    image: HistoricPeople,
  },
  {
    category: "Historic Places",
    image: HistoricPlaces,
  },
  {
    category: "Indigenous Games",
    image: Games,
  },
  {
    category: "Nigerian History",
    image: NHistory,
  },
  {
    category: "Religion",
    image: Religion,
  },
  {
    category: "States",
    image: States,
  },
];
