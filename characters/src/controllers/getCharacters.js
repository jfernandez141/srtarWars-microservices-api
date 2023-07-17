const Characters = require("../data");
const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const { name } = req.query;
  if (name) {
    const character = await Characters.characterByName(name);
    return response(res, 200, character);
  }
  const characters = await axios.get(
    "http://database:8004/Character" || "http://localhost:8004/Character"
  );
  const { data } = characters.data;
  return response(res, 200, data);
};
