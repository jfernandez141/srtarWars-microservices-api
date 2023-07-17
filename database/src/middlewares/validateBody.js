const { clientError, models } = require("../utils");

module.exports = (req, res, next) => {
  const { model, id } = req.params;
  if (id) {
    if (!Object.keys(req.body).length)
      throw new clientError("Params to update not found", 400);
    else next();
  }

  if (model === models.Character) {
    const { name, homeworld, films } = req.body;
    if (!name || !homeworld || !films) {
      throw new clientError("name, homeworld and films are required", 400);
    } else next();
  } else if (model === models.Film) {
    const { id, title, planets, characters } = req.body;
    if (!id || !title || !planets || !characters) {
      throw new clientError(
        "id, title, planets and characters are required",
        400
      );
    } else next();
  } else {
    const { id, name, residents, films } = req.body;
    if (!id || !name || !residents || !films) {
      throw new clientError("id, name, residents and films are required", 400);
    } else next();
  }
};
