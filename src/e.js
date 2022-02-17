const firebase = require("./firebase");
const _ = require("lodash");
(async () => {
  var a = await firebase.firestore().collection("data").doc("documents").get();
  var data = a.data();

  //   for (let datum in data) {
  //     for (datum2 in data[datum]) {
  //       if (data[datum][datum2]["Igbo"] === undefined) {
  //         console.log(`${datum2}`);
  //       }
  //     }
  //   }

  //show data without ":"
  for (let datum in data) {
    for (datum2 in data[datum]) {
      for (datum3 in data[datum][datum2]) {
        if (!data[datum][datum2][datum3].includes(":")) {
          console.log(`${_.startCase(datum2)}`);
        }
      }
    }
  }
})();
