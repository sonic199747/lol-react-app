const api_key = require("../config/keys");
const https = require("https");
const bodyParser = require("body-parser");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post("/mastery", (req, res) => {
    const { id } = summoners;
    const url =
      "https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" +
      id +
      "?api_key=" +
      api_key;
    https
      .get(url, (response) => {
        const masteries = [];
        response.on("data", (mastery) => {
          masteries.push(mastery);
        });
        response.on("end", () => {
          const data = Buffer.concat(masteries);
          var champions = JSON.parse(data);
          console.log(champions[0], champions[1], champions[2]);
        });
      })
      .on("error", (e) => {
        console.error(e);
      });
  });
};
