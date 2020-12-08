const http = require("http");
const bodyParser = require("body-parser");

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/list", (req, res) => {
    const ddragon =
      "http://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion.json";
    http.get(ddragon, (response) => {
      const champions = [];
      response.on("data", (champion) => {
        champions.push(champion);
      });
      response.on("end", () => {
        const data = Buffer.concat(champions);
        var result = JSON.parse(data);
        res.send(result);
      });
    });
  });
};
