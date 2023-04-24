const AgentModel = require("../models/Agent");
const RingGroupModel = require("../models/RingGroup");

class Agent {
  getAllAgent(req, res, next) {
    AgentModel.find()
      .then((agent) => {
        res.json(agent);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  addAgent(req, res, next) {
    const agent = req.body;
    const newAgent = new AgentModel(agent);
    newAgent.save();
    res.json(agent);
  }

  getAllRingGroup(req, res, next) {
    RingGroupModel.find()
      .then((agent) => {
        res.json(agent);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}
module.exports = new Agent();
