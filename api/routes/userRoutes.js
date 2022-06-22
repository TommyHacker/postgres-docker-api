const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.post("/", userController.create);
router.delete("/:id", userController.delete);
module.exports = router;
