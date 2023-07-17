const { default: axios } = require("axios");
const Films = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  // const {title} = req.query;
  // if (title) {
  //     const film = await Films.filmByTitle(title);
  //     return response(res, 200, film);
  // }
  const films = await axios.get(
    "http://database:8004/Film" || "http://localhost:8004/Film"
  );
  const { data } = films.data;
  return response(res, 200, data);
};
