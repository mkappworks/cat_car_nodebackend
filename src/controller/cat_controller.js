const apiHelper = require("./helper/api_helper");
const imageBlenderHelper = require("./helper/image_blender_helper");
const fileWriteHelper = require("./helper/file_write_helper");
const { firstReq, secondReq } = require("../constants/constants");

//main controller function of '/' end point of cat router
const catController = async (req, res, next) => {
  {
    try {
      //pass the two req as a Promise.all array and get catResponse
      const catResponse = await Promise.all([
        apiHelper(firstReq.url),
        apiHelper(secondReq.url),
      ]);

      //pass catResponse to get Jimp object of the blended cat image
      const catBlendedImage = await imageBlenderHelper(catResponse);

      //pass the Jimp object to save the image into file
      await fileWriteHelper(catBlendedImage);

      res.send({
        status: 201,
        message: "The file was saved!",
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = catController;
