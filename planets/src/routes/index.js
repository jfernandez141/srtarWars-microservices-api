const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/planets", controllers.getPlanets);
router.get("/planets/:id", controllers.planetById);


module.exports = router;
