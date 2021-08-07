const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//import cat router
const catRouter = require("./router/cat");

app.use("/", catRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));