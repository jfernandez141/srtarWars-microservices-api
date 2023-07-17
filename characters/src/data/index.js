const characters = require("./characters.json");
const { clientErrors } = require("../utils/errors");

module.exports = {
  list: async () => {
    return characters;
  },
  characterById: async (id) => {
    const character = characters.find((character) => character.id === id);
    if (!character) throw new clientErrors("Character not found", 404);
    return character;
  },
  characterByName: async (name) => {
    const character = characters.filter((character) =>
      character.name?.includes(name)
    );
    if (!character.length) throw new clientErrors("Character not found", 404);
    return character;
  },
};
