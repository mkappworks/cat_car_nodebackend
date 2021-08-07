const asyncHandler = require("express-async-handler");

//helper function to write image in to file as cat-card and .jpg format
const fileWriteHelper = asyncHandler(async (image) =>
  image.write("cat-card.jpg", () => console.log("The file was saved!"))
);

module.exports = fileWriteHelper;
