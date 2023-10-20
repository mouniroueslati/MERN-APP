const { Router } = require("express");
const Team = require('../model/team'); // Import team model

const { getteam, getteambyid, addteam, editteam, deleteteam } = require("../controllers/teamControllers");
const teamrouter = Router();

//teamrouter pour définir vos routes
teamrouter.get("/team", getteam); // Lire tous les teams
teamrouter.get("/team/:id", getteambyid)
teamrouter.post("/team", addteam)
teamrouter.put("/team/:id", editteam )
teamrouter.delete("/team/:id", deleteteam )

module.exports = teamrouter;
