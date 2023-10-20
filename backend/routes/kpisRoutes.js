const { Router } = require("express");
const KPI = require('../model/kpis'); // Import KPI model

const { getkpi, getkpibyid, addkpi, editkpi, deletekpi } = require("../controllers/kpiControllers");
const kpirouter = Router();

//kpirouter pour définir vos routes
kpirouter.get("/kpi", getkpi); // Lire tous les KPIs
kpirouter.get("/kpi/:id", getkpibyid)
kpirouter.post("/kpi", addkpi)
kpirouter.put("/kpi/:id", editkpi )
kpirouter.delete("/kpi/:id", deletekpi )

module.exports = kpirouter;
