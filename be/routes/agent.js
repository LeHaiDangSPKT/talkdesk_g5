const express = require("express");
const router = express.Router();

const AgentController = require("../controllers/Agent");

router.post("/addAgent", AgentController.addAgent);
router.get("/getAllRingGroup", AgentController.getAllRingGroup);
router.get("/getAllAgent", AgentController.getAllAgent);

module.exports = router;
