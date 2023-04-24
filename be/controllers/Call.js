const CallModel = require("../models/Call");

class Call {
  // add call [POST] /call/addCall
  addCall(req, res, next) {
    const call = req.body;
    const newCall = new CallModel(call);
    newCall.save();
    res.json(call);
  }
}

module.exports = new Call();
