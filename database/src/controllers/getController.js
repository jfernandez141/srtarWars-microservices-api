const store = require("../data");
const { response, clientError } = require("../utils");

module.exports = async (req, res) => {
  const { model } = req.params;
  const { name, title } = req.query;
  if (name || title) {
    const data = await store[model].getByName(name || title);
    if (data) return response(res, 200, data);
    else throw new clientError(`${model}: ${name || title}, not found`, 404);
  }
  const data = await store[model].list();
  return response(res, 200, data);
};
