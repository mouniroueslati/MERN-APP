const express = require("express");
require("./config/kpi").connect();


const userRoutes = require("./routes/userRoutes");
const pdcaRoutes = require("./routes/pdcaRoutes");
const scoreCardRoutes = require("./routes/scoreCardRoutes");


const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(pdcaRoutes)
app.use(scoreCardRoutes)

app.listen(9090, () => {
  console.log("listening to port 9090");
});
