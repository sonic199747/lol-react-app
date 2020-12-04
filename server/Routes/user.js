const { api_key } = require("../config/keys");
const https = require("https");
const bodyParser = require("body-parser");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.post("/users", (req, res) => {
    const summoners = {
      id: "",
      name: "",
    };
    console.log(req.body);
    const name = req.body.data.name;
    const url =
      "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      name +
      "?api_key=" +
      api_key;
    console.log(url);
    https.get(url, (response) => {
      response.on("data", (data) => {
        const summoner_data = JSON.parse(data);
        summoners.id = summoner_data.id;
        summoners.name = summoner_data.name;
        res.send(summoners);
      });
    });
  });
};
