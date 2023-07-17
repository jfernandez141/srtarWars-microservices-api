const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/characters", controllers.getCharacters);
router.get("/characters/:id", controllers.getCharacterById);

module.exports = router;
