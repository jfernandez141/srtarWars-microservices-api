const store = require("../data");
const { response, clientError } = require("../utils");

module.exports = async (req, res) => {
  const { model, id } = req.params;
  const data = await store[model].deleteById(id);
  if (!data) throw new clientError(`${model} already not exist`, 404);
  return response(res, 200, data);
};
