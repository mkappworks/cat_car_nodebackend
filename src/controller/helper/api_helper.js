const asyncHandler = require("express-async-handler");
const axios = require("axios");

//helper function to fetch images from the req url
const apiHelper = asyncHandler(async (url) => {
  const response = await axios.get(url, { responseType: "arraybuffer" });

  console.log("Received response with status: " + response.status);

  return response.data;
});

module.exports = apiHelper;
