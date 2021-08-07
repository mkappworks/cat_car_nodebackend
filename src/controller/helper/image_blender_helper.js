const mergeImg = require("merge-img");
require("dotenv").config();

//helper function to merge and transform the images from the response of apiHelper
const imageBlenderHelper = async (catResponse) => {
  //merging the two response images
  const mergedImage = await mergeImg([
    { src: catResponse[0], offsetX: 0, offsetY: 0 },
    { src: catResponse[1], offsetX: +process.env.CAT_WIDTH, offsetY: 0 },
  ]);

  //resizing the merged image
  const resizedImage = await mergedImage.resize(
    +process.env.CAT_WIDTH * 2,
    +process.env.CAT_HEIGHT
  );

  return resizedImage;
};

module.exports = imageBlenderHelper;
