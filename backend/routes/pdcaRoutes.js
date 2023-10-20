const { Router } = require("express");
const PDCA = require('../model/pdca'); // Import PDCA model

const { addpdca, getpdca, editpdca, deletepdca } = require("../controllers/pdcaControllers");
const pdcarouter = Router();

//pdcarouter pour définir vos routes
pdcarouter.get("/pdca", getpdca); // Lire tous les pdcas
pdcarouter.post("/pdca", addpdca)
pdcarouter.put("/pdca/:id", editpdca )
pdcarouter.delete("/pdca/:id", deletepdca )

module.exports = pdcarouter;
