const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./error/error_handler");
const errorNotFound = require("./error/error_not_found");

app.use(cors());
app.use(express.json());

//import cat router
const catRouter = require("./router/cat");

app.use("/", catRouter);

app.use(errorNotFound);

//Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
