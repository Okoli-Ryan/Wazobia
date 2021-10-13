// class Category{
//     constructor(category, topics){
//         this.category = category;
//         this.topics = topics;
//     }
// }

// class Topic{
//     constructor(name, infoEng, infoYor, infoHau, infoIgb){
//         this.name = name;
//         this.infoEng = infoEng;
//         this.infoYor = infoYor;
//         this.infoHau = infoHau;
//         this.infoIgb = infoIgb;

//     }
// }

// export const categories = [
//     new Category("Animals", )

// ]

import Animals from "./assets/coverImages/Animals.jpg";
import Art from "./assets/coverImages/Art.jpg";
import EthnicGroups from "./assets/coverImages/Ethnic Groups.jpg";
import Festivals from "./assets/coverImages/Festivals.jpg";
import Food from "./assets/coverImages/Food.jpg";
import HistoricPeople from "./assets/coverImages/Historic People.jpg";
import HistoricPlaces from "./assets/coverImages/Historic Places.jpg";
import Games from "./assets/coverImages/Indigenous Games.jpg";
import History from "./assets/coverImages/Nigerian History.jpg";
import Religion from "./assets/coverImages/Religion.jpg";
import States from "./assets/coverImages/States.jpg";

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
    image: History,
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
