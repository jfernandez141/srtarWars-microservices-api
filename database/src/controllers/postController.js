const store = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;
  const { body } = req;
  const data = await store[model].insert({ ...body });
  return response(res, 200, data);
};
