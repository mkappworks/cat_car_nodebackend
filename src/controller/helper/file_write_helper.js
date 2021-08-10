//helper function to write image in to file as cat-card and .jpg format
const fileWriteHelper = async (image) => {
  try {
    await image.write("cat-card.jpg", );
    console.log("The file was saved!");
  } catch (error) {
    const err = new Error("The file not saved");
    throw err;

  }
};

module.exports = fileWriteHelper;
