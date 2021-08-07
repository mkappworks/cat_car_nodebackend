const asyncHandler = require("express-async-handler");

//helper function to write image in to file as cat-card and .png format
const fileWriteHelper = asyncHandler(async (image) =>
  image.write("cat-card.png", () => console.log("The file was saved!"))
);

module.exports = fileWriteHelper;
