const { Router } = require('express');

const controller = require('../controllers/controller');

const router = Router();

router.get("/", controller.getTasks);
router.get("/:id", controller.getTaskById);
router.post("/", controller.addTask);
router.delete("/:id", controller.removeTask);
router.put("/:id", controller.updateTask);

module.exports = router;