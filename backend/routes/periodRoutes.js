const { Router } = require("express");
const period = require('../model/period'); // Import period model

const { getperiod, getperiodbyid, addperiod, editperiod, deleteperiod } = require("../controllers/periodControllers");
const periodrouter = Router();

//periodrouter pour définir vos routes
periodrouter.get("/period", getperiod); // Lire tous les periods
periodrouter.get("/period/:id", getperiodbyid)
periodrouter.post("/period", addperiod)
periodrouter.put("/period/:id", editperiod )
periodrouter.delete("/period/:id", deleteperiod )

module.exports = periodrouter;
