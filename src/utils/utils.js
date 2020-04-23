const data = require("../data/data.json");
const fs = require("fs");

const newData = data.map((day) => {
  const newObj = {};
  for (let key in day) {
    if (key.includes("event")) {
      let string = day[key];
      let newString = string.slice(0, 4) + " -" + string.slice(4);

      newObj[key] = newString;
    } else newObj[key] = day[key];
  }
  return newObj;
});

const newDataJson = [JSON.stringify(newData)];
//cd into data folder first
fs.writeFile("./completeData.json", newDataJson, "utf8", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("written");
  }
});
