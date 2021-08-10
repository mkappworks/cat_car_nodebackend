const axios = require("axios");

//helper function to fetch images from the req url
const apiHelper = async (url) => {
  try {
    const response = await axios.get(url, { responseType: "arraybuffer" });
    console.log("Received response with status: " + response.status);
    return response.data;
  } catch (error) {
    const err = new Error("Cannot get images from Api");
    throw err;
  }
};

module.exports = apiHelper;
